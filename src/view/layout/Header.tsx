import { faUserLock, faKey } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import authActions from 'src/modules/auth/authActions';
import authSelectors from 'src/modules/auth/authSelectors';
import layoutActions from 'src/modules/layout/layoutActions';
import { getHistory } from 'src/modules/store';
import Avatar from 'src/view/shared/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faSignOutAlt,
  faCreditCard,
  faList,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

// import { formatMilliseconds } from 'src/utils/FormatMilliseconds';
// import moment from "moment";
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
// import layoutSelectors from "src/modules/layout/layoutSelectors";
// import moment from 'moment';
// import BuyTimeButton from '../common/buyTimeButton';
// import config from 'src/config';
// import { min } from 'lodash';
function Header(props) {
  const dispatch = useDispatch();
  // const [isOpenQuickChat, setIsOpenQuickChat] = useState(false);

  const doToggleMenu = () => {
    dispatch(layoutActions.doToggleMenu());
  };

  const user = useSelector(authSelectors.selectSignedIn);
  const userInfo = useSelector(authSelectors.selectCurrentUser);

  // const darkMode = useSelector(layoutSelectors.selectDarkMode);
  // const selectCurrentUserTimeRemaining = useSelector(
  //   authSelectors.selectCurrentUserTimeRemaining
  // );

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

  // const JoinDiscordComponent = (props) => (
  //   <a
  //     className={`mt-2 ml-2 ${props.additionalClass}`}
  //     href={config.joinDiscordLink}
  //     target='blank'
  //   >
  //     <svg
  //       xmlns='http://www.w3.org/2000/svg'
  //       height='1.5em'
  //       viewBox='0 0 640 512'
  //       style={{ fill: '#fff' }}
  //     >
  //       <path d='M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z'></path>
  //     </svg>
  //   </a>
  // );

  return (
    <nav className='bg-gray shadow dark:bg-gray-900 border border-gray-400 border-t-0 border-r-0 border-l-0'>
      <div className='px-6 py-3'>
        <div className='md:flex md:items-center md:justify-between'>
          <div className='flex items-center justify-between w-full'>
            <div className='relative flex items-center text-xl font-semibold text-gray-700'>
              <button
                className='mr-4 text-xl font-bold text-gray-700 focus:outline-none dark:text-white md:text-2xl hover:text-gray-700 dark:hover:text-gray-300 hidden'
                onClick={doToggleMenu}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
              <a href='/'>
                <div className='text-xl py-1 font-semibold text-center text-gray-200 hover:text-white'>
                  LUCID LLM
                </div>
              </a>
            </div>

            <div className='flex items-center mt-0'>
              {user ? (
                <div className='flex mr-3'>
                  {
                    /* {isOpenQuickChat && (
                    <button
                      className="inline-block px-2 py-1 my-2 mr-2 text-sm text-white bg-black border border-white rounded-md hover:bg-gray-300 focus:outline-none"
                      type="button"
                      onClick={() => setIsOpenQuickChat(true)}>
                      <FontAwesomeIcon className="mr-3" icon={faComments} />
                      QUICK CHAT
                    </button>
                  )}
                  {isOpenQuickChat && (
                    <PromptParamsFormModal
                      parameters={{}}
                      quickMode={true}
                      onClose={() => setIsOpenQuickChat(false)}
                      // onSuccess={doOpenApplication}
                    />
                  )} */
                    // <span className='inline-block px-2 py-2 text-sm text-white rounded-md focus:outline-none'>
                    //   Usage Remaining{' '}
                    //   {formatMilliseconds(selectCurrentUserTimeRemaining)}
                    // </span>
                  }
                  {/* <BuyTimeButton />
                  <JoinDiscordComponent /> */}
                  {/* ) : (
                    <></>
                  )} */}
                </div>
              ) : (
                <>
                  {/* <Link
                    to='/auth/signup'
                    className='py-2 px-4 mr-4 text-sm tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md disabled:opacity-80 disabled:cursor-default hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
                    type='button'
                  >
                    <FontAwesomeIcon className='mr-3' icon={faUserLock} />
                    Signup
                  </Link> */}
                  {/* <JoinDiscordComponent additionalClass={'mb-1'} /> */}
                  <Link
                    to='auth/signin'
                    className='py-2 px-4 ml-4 text-sm tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md disabled:opacity-80 disabled:cursor-default hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
                  >
                    <FontAwesomeIcon className='mr-3' icon={faUserLock} />
                    Login
                  </Link>
                </>
              )}

              {user ? (
                <>
                  <Menu>
                    <Menu.Button className='flex items-center focus:outline-none'>
                      <Avatar
                        size='small'
                        src={userAvatar || undefined}
                        alt='avatar'
                      />

                      <div className='hidden mx-2 text-sm font-medium text-left text-gray-700 dark:text-gray-200 md:block lg:block'>
                        {userText}
                      </div>
                    </Menu.Button>
                    <Menu.Items>
                      <div className='absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-500'>
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
                            <FontAwesomeIcon
                              className='mr-2'
                              icon={faCreditCard}
                            />
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
                              <FontAwesomeIcon
                                className='mr-2'
                                icon={faSignOutAlt}
                              />
                              {i18n('auth.signout')}
                            </button>
                          </>
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Menu>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
