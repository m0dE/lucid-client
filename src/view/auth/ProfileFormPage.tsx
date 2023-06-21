import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import ProfileForm from 'src/view/auth/ProfileForm';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import MenuComponent from './MenuComponent';

function ProfileFormPage() {
  return (
    <>
      <div className='flex'>
        <MenuComponent />
        <div className='w-full bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 dark:text-gray-200 rounded-md'>
          {/* <Breadcrumb
            items={[
              [i18n('dashboard.menu'), '/'],
              [i18n('auth.profile.title')],
            ]}
          /> */}

          <ProfileForm onCancel={() => getHistory().push('/')} />
        </div>
      </div>
    </>
  );
}

export default ProfileFormPage;
