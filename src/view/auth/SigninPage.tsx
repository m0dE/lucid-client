import { yupResolver } from '@hookform/resolvers/yup';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import config from 'src/config';
import { i18n } from 'src/i18n';
import actions from 'src/modules/auth/authActions';
import selectors from 'src/modules/auth/authSelectors';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import Message from 'src/view/shared/message';
import * as yup from 'yup';
// import { GoogleLogin } from '@dump-work/react-google-login';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

const schema = yup.object().shape({
  email: yupFormSchemas.string(i18n('user.fields.email'), {
    required: true,
  }),
  password: yupFormSchemas.string(i18n('user.fields.password'), {
    required: true,
  }),
  rememberMe: yupFormSchemas.boolean(i18n('user.fields.rememberMe')),
});

function SigninPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const loading = useSelector(selectors.selectLoading);

  const { socialErrorCode } = queryString.parse(location.search);

  const externalErrorMessage = useSelector(selectors.selectErrorMessage);

  // const backgroundImageUrl = useSelector(selectors.selectBackgroundImageUrl);
  const logoUrl = useSelector(selectors.selectLogoUrl);

  useEffect(() => {
    dispatch(actions.doClearErrorMessage());
  }, [dispatch]);

  useEffect(() => {
    if (socialErrorCode) {
      if (socialErrorCode === 'generic') {
        Message.error(i18n('errors.defaultErrorMessage'));
      } else {
        Message.error(i18n(`auth.social.errors.${socialErrorCode}`));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [initialValues] = useState({
    email: '',
    password: '',
    rememberMe: true,
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: initialValues,
  });

  const onSubmit = ({ email, password, rememberMe }) => {
    dispatch(actions.doSigninWithEmailAndPassword(email, password, rememberMe));
  };

  const handleLogin = async (response) => {
    if (response && response.credential) {
      const userData: any = jwt_decode(response.credential);
      if (userData && userData.email) {
        dispatch(actions.doGoogleUpsertAccount(userData.email));
      } else {
        console.log('no user data fetched from google', userData);
      }
    } else {
      console.log('no response from goole', response);
    }
  };
  return (
    <div
      style={{
        //backgroundImage: `url(${backgroundImageUrl || "/images/signin.jpg"})`,
        background:
          'linear-gradient(180deg, rgba(0,23,36,1) 0%, rgba(12,0,41,1) 50%, rgba(70,70,106,1) 100%)',
      }}
      className='flex items-center justify-center h-screen bg-cover'
    >
      <div className='w-full m-auto bg-white shadow-md md:max-w-sm lg:max-w-sm md:rounded-md lg:rounded-md dark:bg-gray-800'>
        <div className='p-6'>
          <div className='flex items-center justify-center w-full'>
            {logoUrl ? (
              <img
                src={logoUrl}
                className='object-cover w-72 max-h-14'
                alt={i18n('app.title')}
              />
            ) : (
              <h1 className='text-3xl font-semibold text-center text-gray-700 dark:text-white'>
                {i18n('app.title')}
              </h1>
            )}
          </div>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='mt-6'>
              <InputFormItem
                name='email'
                label={i18n('user.fields.email')}
                autoComplete='email'
                autoFocus
                externalErrorMessage={externalErrorMessage}
              />

              <div className='mt-4'>
                <InputFormItem
                  name='password'
                  label={i18n('user.fields.password')}
                  autoComplete='password'
                  type='password'
                />
              </div>

              <div className='flex items-center justify-between mt-4'>
                <div className=''>
                  <input
                    className='border-gray-300 rounded cursor-pointer dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                    type='checkbox'
                    id={'rememberMe'}
                    name={'rememberMe'}
                    ref={form.register}
                  />

                  <label
                    className='ml-1 text-sm text-gray-600 cursor-pointer dark:text-gray-400'
                    htmlFor={'rememberMe'}
                  >
                    {i18n('user.fields.rememberMe')}
                  </label>
                </div>

                <div className='pr-0'>
                  <Link
                    className='text-sm text-gray-600 cursor-pointer dark:text-gray-400'
                    to='/auth/forgot-password'
                  >
                    {i18n('auth.forgotPassword')}
                  </Link>
                </div>
              </div>

              <div className='mt-6'>
                <button
                  disabled={loading}
                  type='submit'
                  className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md disabled:opacity-50 disabled:cursor-default hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
                >
                  {i18n('auth.signin')}
                </button>
              </div>
            </form>
          </FormProvider>
          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b dark:border-gray-600 lg:w-1/5'></span>

            <span className='text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline'>
              {i18n('auth.social.header')}
            </span>

            <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/5'></span>
          </div>

          <div className='mt-3 mt-3 flex items-center justify-center'>
            <GoogleOAuthProvider clientId={config.googleClientId}>
              <GoogleLogin
                shape='circle'
                type='standard'
                logo_alignment='left'
                theme='filled_black'
                size='large'
                onSuccess={handleLogin}
                onError={() => console.log('Error')}
              />
            </GoogleOAuthProvider>
          </div>
        </div>

        <div className='py-4 bg-gray-100 dark:bg-gray-700 rounded-b-md'>
          <Link
            className='block text-xs font-medium text-center text-gray-800 dark:text-gray-200 hover:underline'
            to='/auth/signup'
          >
            {i18n('auth.createAnAccount')}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SigninPage;
