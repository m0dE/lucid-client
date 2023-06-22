import React from 'react';
import { getHistory } from 'src/modules/store';
import PasswordChangeForm from 'src/view/auth/PasswordChangeForm';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'src/modules/auth/authSelectors';
import SideBar from '../common/SideBar';

function PasswordChangeFormPage(props) {
  const userInfo = useSelector(authSelectors.selectCurrentUser);

  useEffect(() => {
    if (userInfo && userInfo.social === true) {
      getHistory().push('/');
    }
  }, [userInfo]);

  return (
    <>
      <div className='flex'>
        <SideBar />
        <div className='bg-white w-full dark:bg-gray-900 dark:border-gray-900 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md'>
          {/* <Breadcrumb
            items={[
              [i18n('dashboard.menu'), '/'],
              [i18n('auth.passwordChange.title')],
            ]}
          /> */}

          <PasswordChangeForm onCancel={() => getHistory().push('/')} />
        </div>
      </div>
    </>
  );
}

export default PasswordChangeFormPage;
