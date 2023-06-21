import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/auth/authActions';
import selectors from 'src/modules/auth/authSelectors';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  oldPassword: yupFormSchemas.string(i18n('user.fields.oldPassword'), {
    required: true,
  }),
  newPassword: yupFormSchemas.string(i18n('user.fields.newPassword'), {
    required: true,
  }),
  newPasswordConfirmation: yupFormSchemas
    .string(i18n('user.fields.newPasswordConfirmation'), {
      required: true,
    })
    .oneOf(
      [yup.ref('newPassword'), null],
      i18n('auth.passwordChange.mustMatch')
    ),
});

function PasswordChangeFormPage(props) {
  const dispatch = useDispatch();

  const [initialValues] = useState(() => ({
    oldPassword: '',
    newPassword: '',
    newPasswordConfirmation: '',
  }));

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const saveLoading = useSelector(selectors.selectLoadingPasswordChange);

  const onSubmit = (values) => {
    dispatch(actions.doChangePassword(values.oldPassword, values.newPassword));
  };

  // const onReset = () => {
  //   Object.keys(initialValues).forEach((key: any) => {
  //     form.setValue(key, initialValues[key]);
  //   });
  // };

  return (
    <FormProvider {...form}>
      <div className='flex justify-center items-center'>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='border border-gray-300 rounded-lg p-4 w-auto item-center'
        >
          <h1 className='text-lg font-medium mb-6'>
            {i18n('auth.passwordChange.title')}
          </h1>
          <div className='w-full md:w-md lg:w-md'>
            <InputFormItem
              type='password'
              name='oldPassword'
              label={i18n('user.fields.oldPassword')}
              autoComplete='old-password'
              autoFocus
            />
          </div>
          <div className='w-full sm:w-md md:w-md lg:w-md mt-4'>
            <InputFormItem
              type='password'
              name='newPassword'
              label={i18n('user.fields.newPassword')}
              autoComplete='new-password'
            />
          </div>
          <div className='w-full sm:w-md md:w-md lg:w-md mt-4'>
            <InputFormItem
              type='password'
              name='newPasswordConfirmation'
              label={i18n('user.fields.newPasswordConfirmation')}
              autoComplete='new-password'
            />
          </div>

          <div className='pt-4'>
            {/* <button
              disabled={saveLoading}
              onClick={onReset}
              className='inline-block px-8 py-2 my-2 mr-6 text-sm text-white border border-white rounded-md hover:bg-gray-300 focus:outline-none dark:hover:text-black'
              type='button'>
              <FontAwesomeIcon className='mr-2' icon={faUndo} />
              {i18n('common.reset')}
            </button> */}
            <div className='pt-4 flex justify-center'>
              {props.onCancel ? (
                <button
                  disabled={saveLoading}
                  onClick={() => props.onCancel()}
                  className='inline-block px-8 py-2 my-2 mr-6 text-sm text-white border border-white rounded-md hover:bg-gray-300 focus:outline-none dark:hover:text-black'
                  type='button'
                >
                  {i18n('common.cancel')}
                  <FontAwesomeIcon className='ml-2' icon={faTimes} />
                </button>
              ) : null}{' '}
              <button
                className='inline-block border-green-500 border-2 rounded-md px-4 py-2 my-2 mr-4 text-sm text-green-500 hover:text-white hover:bg-green-500 focus:outline-none focus:border-green-500'
                disabled={saveLoading}
                type='button'
                onClick={form.handleSubmit(onSubmit)}
              >
                {i18n('common.save')}
                <FontAwesomeIcon className='ml-2' icon={faCheckCircle} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </FormProvider>
  );
}

export default PasswordChangeFormPage;
