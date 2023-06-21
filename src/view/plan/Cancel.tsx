import React from 'react';
import { i18n } from 'src/i18n';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import { getHistory } from 'src/modules/store';
function Cancel(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('billing.menu'), '/billing'],
          [i18n('billing.cancelMenu')],
        ]}
      />

      <div className='p-6 mt-4 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:border-gray-800 dark:text-white'>
        <h1 className='mb-6 text-lg font-medium text-center'>
          {i18n('billing.cancelTitle')}
        </h1>

        <div className='text-center'>
          <div>
            <h4>Oops! Your payment has been cancelled.</h4>
            <p>
              We appreciate your business! If you have any questions, please
              email us at{' '}
              <a href='mailto:orders@chatsuggest.com'>orders@chatsuggest.com</a>
              .
            </p>
            <div>
              <button onClick={(e) => getHistory().push('/')}>
                {' '}
                Go to Home page
              </button>
            </div>{' '}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cancel;
