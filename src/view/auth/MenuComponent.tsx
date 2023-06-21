import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faKey,
  faList,
  faCreditCard,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { i18n } from 'src/i18n';
import { useSelector } from 'react-redux';
import authSelectors from 'src/modules/auth/authSelectors';
import { getHistory } from 'src/modules/store';

const MenuComponent = () => {
  const userInfo = useSelector(authSelectors.selectCurrentUser);
  const doNavigateToProfile = () => {
    getHistory().push('/profile');
  };

  const doNavigateToBilling = () => {
    getHistory().push('/billing');
  };

  const doNavigateToReport = () => {
    getHistory().push('/report');
  };

  const doNavigateToPasswordChange = () => {
    getHistory().push('/password-change');
  };
  return (
    <>
      <div className='w-72 fixed h-screen'>
        <aside className=' right-0 z-20 w-48 py-2 mt-2 border border-white-200 rounded-md shadow-xl '>
          <div>
            <button
              onClick={doNavigateToProfile}
              className='block w-full px-4 py-2 text-sm text-left text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:text-white'
              type='button'
            >
              <FontAwesomeIcon className='mr-2' icon={faUser} />
              {i18n('auth.profile.title')}
            </button>
          </div>
          <hr className='bg-gray mt-2 mx-4' />

          <div>
            <button
              onClick={doNavigateToBilling}
              className='block w-full px-4 py-2 text-sm text-left text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:text-white'
              type='button'
            >
              <FontAwesomeIcon className='mr-2' icon={faCreditCard} />
              {i18n('auth.billing')}
            </button>
          </div>
          <hr className='bg-gray mt-2 mx-4' />

          <div>
            <button
              onClick={doNavigateToReport}
              className='block w-full px-4 py-2 text-sm text-left text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:text-white'
              type='button'
            >
              <FontAwesomeIcon className='mr-2' icon={faList} />
              {i18n('auth.report')}
            </button>
          </div>

          {userInfo && userInfo.social === false && (
            <>
              <hr className='bg-gray mt-2 mx-4' />
              <div>
                <button
                  onClick={doNavigateToPasswordChange}
                  className='block w-full px-4 py-2 text-sm text-left text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:text-white'
                  type='button'
                >
                  <FontAwesomeIcon className='mr-2' icon={faKey} />
                  {i18n('auth.passwordChange.title')}
                </button>
              </div>
            </>
          )}
        </aside>
      </div>

      <div className='ml-56 py-2 w-0.5 border border-gray-500 mx-2 mr-6 h-screen'></div>
    </>
  );
};

export default MenuComponent;
