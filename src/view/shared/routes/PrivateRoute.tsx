import PermissionChecker from 'src/modules/auth/permissionChecker';
import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import config from 'src/config';
import { tenantSubdomain } from 'src/modules/tenant/tenantSubdomain';

function PrivateRoute({
  component: Component,
  currentTenant,
  currentUser,
  permissionRequired,
  ...rest
}) {
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={(props) => {
        const permissionChecker = new PermissionChecker(
          currentTenant,
          currentUser
        );

        if (!permissionChecker.isAuthenticated) {
          return (
            <Redirect
              to={{
                pathname: '/ ',
                state: { from: location },
              }}
            />
          );
        }

        if (!permissionChecker.isEmailVerified) {
          return <Redirect to='/auth/email-unverified' />;
        }

        if (
          ['multi', 'multi-with-subdomain'].includes(config.tenantMode) &&
          !tenantSubdomain.isSubdomain
        ) {
          if (permissionChecker.isEmptyTenant) {
            return <Redirect to='/' />;
          }
        } else {
          if (permissionChecker.isEmptyPermissions) {
            return <Redirect to='/auth/empty-permissions' />;
          }
        }

        if (!permissionChecker.match(permissionRequired)) {
          return <Redirect to='/403' />;
        }

        return <Component {...props} />;
      }}
    />
  );
}

export default PrivateRoute;
