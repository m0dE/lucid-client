import { faHome, faKey } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import authActions from 'src/modules/auth/authActions';
import authSelectors from 'src/modules/auth/authSelectors';
import { getHistory } from 'src/modules/store';
import Avatar from 'src/view/shared/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignOutAlt,
  faCreditCard,
  faList,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import { Menu } from '@headlessui/react';
const SideBar = () => {
  const dispatch = useDispatch();

  const userInfo = useSelector(authSelectors.selectCurrentUser);

  const userText = useSelector(
    authSelectors.selectCurrentUserNameOrEmailPrefix
  );
  const userAvatar = useSelector(authSelectors.selectCurrentUserAvatar);

  const doSignout = () => {
    dispatch(authActions.doSignout());
  };

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

  const doNavigateToHome = () => {
    getHistory().push('/');
  };

  const clickHandler = (e) => {
    alert('Need to implement');
  };
  return (
    <>
      <div
        className='dark flex-shrink-0 overflow-x-hidden bg-gray-800 p-3 rounded-md'
        style={{ width: '260px', height: '100vh' }}
      >
        <div className='mb-1 flex flex-row gap-2 mb-3'>
          <button
            className='flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-10 flex-shrink-0 flex-grow'
            onClick={clickHandler}
          >
            <svg
              stroke='currentColor'
              fill='none'
              stroke-width='2'
              viewBox='0 0 24 24'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='h-4 w-4'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <line x1='12' y1='5' x2='12' y2='19'></line>
              <line x1='5' y1='12' x2='19' y2='12'></line>
            </svg>
            New chat
          </button>
        </div>

        <div className='absolute bottom-10 left-0 h-16 w-64 p-1'>
          <>
            <hr className='w-full my-3' />
            <Menu>
              <Menu.Button className='flex items-center focus:outline-none text-center w-full'>
                <Avatar
                  size='small'
                  src={userAvatar || undefined}
                  alt='avatar'
                />

                <div className='hidden mx-2 text-sm font-medium text-left text-gray-700 dark:text-gray-200 md:block lg:block'>
                  {userText}
                </div>
              </Menu.Button>
              <Menu.Items className='absolute w-full' style={{ top: '-180px' }}>
                <div
                  className='absolute top-0 z-20 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-600'
                  style={{ width: '250px' }}
                >
                  <Menu.Item>
                    <button
                      onClick={doNavigateToHome}
                      className='block w-full px-4 py-2 text-sm text-left text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:text-white'
                      type='button'
                    >
                      <FontAwesomeIcon className='mr-2' icon={faHome} />
                      Home
                    </button>
                  </Menu.Item>
                  <Menu.Item>
                    <button
                      onClick={doNavigateToProfile}
                      className='block w-full px-4 py-2 text-sm text-left text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:text-white'
                      type='button'
                    >
                      <FontAwesomeIcon className='mr-2' icon={faUser} />
                      {i18n('auth.profile.title')}
                    </button>
                  </Menu.Item>
                  <Menu.Item>
                    <button
                      onClick={doNavigateToBilling}
                      className='block w-full px-4 py-2 text-sm text-left text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:text-white'
                      type='button'
                    >
                      <FontAwesomeIcon className='mr-2' icon={faCreditCard} />
                      {i18n('auth.billing')}
                    </button>
                  </Menu.Item>
                  <Menu.Item>
                    <button
                      onClick={doNavigateToReport}
                      className='block w-full px-4 py-2 text-sm text-left text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:text-white'
                      type='button'
                    >
                      <FontAwesomeIcon className='mr-2' icon={faList} />
                      {i18n('auth.report')}
                    </button>
                  </Menu.Item>
                  {userInfo && userInfo.social === false && (
                    <Menu.Item>
                      <button
                        onClick={doNavigateToPasswordChange}
                        className='block w-full px-4 py-2 text-sm text-left text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:text-white'
                        type='button'
                      >
                        <FontAwesomeIcon className='mr-2' icon={faKey} />
                        {i18n('auth.passwordChange.title')}
                      </button>
                    </Menu.Item>
                  )}
                  <Menu.Item>
                    <>
                      <hr className='bg-white mb-2 mx-4' />
                      <button
                        onClick={doSignout}
                        className='block w-full px-4 py-2 text-sm text-left text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:text-white'
                        type='button'
                      >
                        <FontAwesomeIcon className='mr-2' icon={faSignOutAlt} />
                        {i18n('auth.signout')}
                      </button>
                    </>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          </>
        </div>
      </div>
    </>
  );
};

export default SideBar;
