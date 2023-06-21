import React from 'react';
import { i18n } from 'src/i18n';
import Plans from 'src/security/plans';
// import PlanCardFree from 'src/view/plan/PlanCardFree';
import PlanCardPaid from 'src/view/plan/PlanCardPaid';
// import Breadcrumb from 'src/view/shared/Breadcrumb';
import authSelectors from 'src/modules/auth/authSelectors';
import { useSelector } from 'react-redux';
import moment from 'moment';
import MenuComponent from '../auth/MenuComponent';

function PlanPage(props) {
  const tenantDetail = useSelector(authSelectors.selectCurrentTenant);
  return (
    <>
      <div className='flex'>
        <MenuComponent />

        <div className='bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:border-gray-900 w-full dark:text-white'>
          {/* <Breadcrumb
            items={[[i18n('dashboard.menu'), '/'], [i18n('billing.menu')]]}
          /> */}

          <h1 className='mb-6 text-lg font-medium'>{i18n('billing.menu')}</h1>
          <div className='p-6 rounded-2xl border border-gray-200 bg-gray-600'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
              {/* <div>
            <PlanCardFree />
          </div> */}

              <div>
                <PlanCardPaid plan={Plans.values.experimental} />
              </div>
              <div>
                <PlanCardPaid plan={Plans.values.basic} />
              </div>
              <div>
                <PlanCardPaid plan={Plans.values.professional} />
              </div>
            </div>
          </div>
          {tenantDetail &&
          tenantDetail.paymentDetail &&
          tenantDetail.paymentDetail.length ? (
            <>
              <hr />
              <h1 className='text-center mb-6 text-lg font-medium mt-8 mb-3'>
                Your Invoices
              </h1>
              <div className='table-responsive shadow rounded-lg dark:bg-gray-600 dark:border-gray-600 dark:text-gray-200 dark:border'>
                <table className='border-collapse border border-slate-500 min-w-full'>
                  <thead>
                    <tr
                      style={{ borderBottom: '1px solid #fff' }}
                      className='uppercase text-sm'
                    >
                      <th className='p-3 text-left'>Date</th>
                      <th>Amount</th>
                      <th>Plan</th>
                      <th>Status</th>
                      <th className='text-right p-3'>Payment Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tenantDetail.paymentDetail
                      .sort((a, b) => (a.created < b.created ? 1 : -1))
                      .map((detail) => (
                        <tr className='uppercase text-center text-sm'>
                          <td className='p-3 text-left'>
                            {moment
                              .unix(detail.created)
                              .format('MM/DD/YYYY HH:mm:ss')}
                          </td>
                          <td>{`${detail.currency} ${
                            detail.amount_total / 100
                          }`}</td>
                          <td>{detail.plan}</td>
                          <td>{detail.status}</td>
                          <td className='text-right p-3'>
                            {detail.payment_status}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default PlanPage;
