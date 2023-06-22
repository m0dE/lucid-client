import Permissions from 'src/security/permissions';
import config from 'src/config';

const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    loader: () => import('src/view/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('src/view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/report',
    loader: () => import('src/view/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/password-change',
    loader: () => import('src/view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
  },

  config.isPlanEnabled && {
    path: '/billing',
    loader: () => import('src/view/plan/PlanPage'),
    permissionRequired: permissions.planRead,
    exact: true,
  },

  config.isPlanEnabled && {
    path: '/plan/success',
    loader: () => import('src/view/plan/Success'),
    exact: true,
  },
  config.isPlanEnabled && {
    path: '/plan/cancel',
    loader: () => import('src/view/plan/Cancel'),
    exact: true,
  },
  {
    path: '/admin',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/user/new',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/user/:id/edit',
    loader: () => import('src/view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },
  {
    path: '/user/:id',
    loader: () => import('src/view/user/view/UserViewPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    loader: () => import('src/view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    loader: () => import('src/view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/user-settings',
    loader: () => import('src/view/userSettings/list/UserSettingsListPage'),
    permissionRequired: permissions.userSettingsRead,
    exact: true,
  },
  {
    path: '/user-settings/new',
    loader: () => import('src/view/userSettings/form/UserSettingsFormPage'),
    permissionRequired: permissions.userSettingsCreate,
    exact: true,
  },

  {
    path: '/user-settings/:id/edit',
    loader: () => import('src/view/userSettings/form/UserSettingsFormPage'),
    permissionRequired: permissions.userSettingsEdit,
    exact: true,
  },
  {
    path: '/user-settings/:id',
    loader: () => import('src/view/userSettings/view/UserSettingsViewPage'),
    permissionRequired: permissions.userSettingsRead,
    exact: true,
  },
].filter(Boolean);

const publicRoutes = [
  {
    path: '/ ',
    loader: () => import('src/view/auth/SigninPage'),
  },
  {
    path: '/auth/signin',
    loader: () => import('src/view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('src/view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () => import('src/view/auth/ForgotPasswordPage'),
  },
].filter(Boolean);

const emptyTenantRoutes = [
  {
    path: '/auth/tenant',
    loader: () => import('src/view/auth/TenantPage'),
  },
].filter(Boolean);

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () => import('src/view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean);

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () => import('src/view/auth/EmailUnverifiedPage'),
  },
].filter(Boolean);

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('src/view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/invitation',
    loader: () => import('src/view/auth/InvitationPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('src/view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () => import('src/view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () => import('src/view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () => import('src/view/shared/errors/Error404Page'),
  },
].filter(Boolean);

export default {
  privateRoutes,
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
