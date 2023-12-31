// import { faSave } from '@fortawesome/free-regular-svg-icons';
import {
  // faArrowLeft,
  faCheckCircle,
  faTimes,
  // faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/auth/authActions';
import selectors from 'src/modules/auth/authSelectors';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
// import { getHistory } from 'src/modules/store';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yupFormSchemas.string(i18n('user.fields.firstName'), {
    max: 80,
  }),
  lastName: yupFormSchemas.string(i18n('user.fields.lastName'), {
    max: 175,
  }),
  phoneNumber: yupFormSchemas.string(i18n('user.fields.phoneNumber'), {
    matches: /^[0-9]/,
    max: 24,
  }),
  avatars: yupFormSchemas.images(i18n('user.fields.avatars'), {
    max: 1,
  }),
});

function ProfileFormPage(props) {
  const dispatch = useDispatch();

  const saveLoading = useSelector(selectors.selectLoadingUpdateProfile);

  const currentUser = useSelector(selectors.selectCurrentUser);

  const [initialValues] = useState(() => {
    const record = currentUser || {};

    return {
      firstName: record.firstName,
      lastName: record.lastName,
      phoneNumber: record.phoneNumber,
      avatars: record.avatars || [],
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    const data = { ...values, timeRemaining: currentUser.timeRemaining };
    dispatch(actions.doUpdateProfile(data));
  };

  // const onReset = () => {
  //   Object.keys(initialValues).forEach((key) => {
  //     form.setValue(key, initialValues[key]);
  //   });
  // };

  return (
    <FormProvider {...form}>
      <div className='flex justify-center items-center'>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='border border-gray-300 rounded-lg p-4 ml-4 w-auto item-center'
        >
          <h1 className='text-lg font-medium mb-6'>
            {i18n('auth.profile.title')}
          </h1>
          <div className='w-full md:w-md lg:w-md '>
            <label className='block text-sm text-gray-800 dark:text-gray-200'>
              {i18n('user.fields.email')}
            </label>
            <div className='mt-1'>{currentUser.email}</div>
          </div>
          <div className='w-full sm:w-md md:w-md lg:w-md mt-4'>
            <InputFormItem
              name='firstName'
              label={i18n('user.fields.firstName')}
              autoComplete='firstName'
              autoFocus
            />
          </div>
          <div className='w-full sm:w-md md:w-md lg:w-md mt-4'>
            <InputFormItem
              name='lastName'
              label={i18n('user.fields.lastName')}
              autoComplete='lastName'
            />
          </div>
          <div className='w-full sm:w-md md:w-md lg:w-md mt-4'>
            <InputFormItem
              name='phoneNumber'
              label={i18n('user.fields.phoneNumber')}
              autoComplete='phoneNumber'
              prefix='+'
            />
          </div>
          <div className='w-full sm:w-md md:w-md lg:w-md mt-4'>
            <ImagesFormItem
              name='avatars'
              label={i18n('user.fields.avatars')}
              storage={Storage.values.userAvatarsProfiles}
              max={1}
            />
          </div>
          <div className='pt-4 flex justify-center'>
            {/* <button
              disabled={saveLoading}
              onClick={onReset}
              className='inline-block px-8 py-2 my-2 mr-6 text-sm text-white border border-white rounded-md hover:bg-gray-300 focus:outline-none'
              type='button'>
              {i18n('common.reset')}
              <FontAwesomeIcon className='ml-2' icon={faUndo} />
            </button> */}

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
            ) : null}

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
        </form>
      </div>
    </FormProvider>
  );
}

export default ProfileFormPage;
