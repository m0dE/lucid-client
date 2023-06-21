import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { default as authSelectors } from 'src/modules/auth/authSelectors';
import PermissionChecker from 'src/modules/auth/permissionChecker';
import layoutActions from 'src/modules/layout/layoutActions';
import layoutSelectors from 'src/modules/layout/layoutSelectors';
import menus from 'src/view/menus';

function Menu(props) {
  const dispatch = useDispatch();

  const currentTenant = useSelector(authSelectors.selectCurrentTenant);
  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const menuVisible = useSelector(layoutSelectors.selectMenuVisible);

  const doToggleMenuIfSmall = () => {
    if (window.innerWidth < 640) {
      dispatch(layoutActions.doToggleMenu());
    }
  };

  const permissionChecker = new PermissionChecker(currentTenant, currentUser);

  const selectedKeys = () => {
    const url = props.url;

    const match = menus.find((option) => {
      if (option.exact) {
        return url === option.path;
      }

      return url === option.path || url.startsWith(option.path + '/');
    });

    if (match) {
      return [match.path];
    }

    return [];
  };

  const match = (permission) => {
    return permissionChecker.match(permission);
  };

  const lockedForCurrentPlan = (permission) => {
    return permissionChecker.lockedForCurrentPlan(permission);
  };

  return (
    <div
      className={`${
        menuVisible ? 'flex flex-col w-full' : 'hidden'
      } sm:w-64 md:w-64 lg:w-64 flex-shrink-0 min-h-screen px-4 py-4 border-0 sm:border-r md:border-r lg:border-r bg-gray-800 dark:border-gray-600`}
    >
      <div className='flex items-center justify-between w-full sm:justify-center md:justify-center lg:justify-center'>
        <div className='block mr-2 text-lg text-gray-400 cursor-pointer sm:hidden md:hidden lg:hidden hover:text-gray-200'>
          <FontAwesomeIcon onClick={doToggleMenuIfSmall} icon={faTimes} />
        </div>
      </div>

      <div className='flex flex-col justify-between flex-1 mt-6'>
        <nav>
          {menus
            .filter((menu) => match(menu.permissionRequired))
            .map((menu, index) => (
              <Link
                className={`${index !== 0 ? 'mt-4' : ''} ${
                  selectedKeys().includes(menu.path)
                    ? 'flex items-center px-4 py-2 rounded-md bg-gray-700 text-gray-200'
                    : 'flex items-center px-4 py-2 transition-colors duration-200 transform rounded-md text-gray-400 hover:bg-gray-700 hover:text-gray-200'
                }`}
                onClick={doToggleMenuIfSmall}
                key={menu.path}
                to={menu.path}
              >
                <FontAwesomeIcon className='w-5 h-5' icon={menu.icon} />
                <span className='mx-4 font-medium truncate'>{menu.label}</span>
              </Link>
            ))}

          {menus
            .filter((menu) => lockedForCurrentPlan(menu.permissionRequired))
            .map((menu) => (
              <div
                className={`mt-4 opacity-50 flex items-center px-4 py-2 text-gray-600 rounded-md dark:text-gray-400`}
              >
                <FontAwesomeIcon className='w-5 h-5' icon={menu.icon} />
                <span className='mx-4 font-medium truncate'>{menu.label}</span>
              </div>
            ))}
        </nav>
      </div>
    </div>
  );
}

export default Menu;
