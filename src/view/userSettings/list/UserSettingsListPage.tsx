import React from 'react';
import { i18n } from 'src/i18n';
import UserSettingsListFilter from 'src/view/userSettings/list/UserSettingsListFilter';
import UserSettingsListTable from 'src/view/userSettings/list/UserSettingsListTable';
import UserSettingsListToolbar from 'src/view/userSettings/list/UserSettingsListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function UserSettingsListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.userSettings.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.userSettings.list.title')}
        </h1>
        <UserSettingsListToolbar />
        <UserSettingsListFilter />
        <UserSettingsListTable />
      </div>
    </>
  );
}

export default UserSettingsListPage;
