import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import ReactTooltip from 'react-tooltip';
import { i18n } from 'src/i18n';
import authSelectors from 'src/modules/auth/authSelectors';
import actions from 'src/modules/plan/planActions';
import selectors from 'src/modules/plan/planSelectors';
// import Plans from 'src/security/plans';

export default function PlanCardPaid(props) {
  const dispatch = useDispatch();
  const { plan } = props;

  const planLabel =
    plan === '1 hour'
      ? 'experimental'
      : plan === '4 hours'
      ? 'basic'
      : plan === '10 hours'
      ? 'professional'
      : 'free';
  const currentTenant = useSelector(authSelectors.selectCurrentTenant);

  const loading = useSelector(selectors.selectLoading);

  const hasPermissionToEdit = useSelector(selectors.selectPermissionToEdit);

  const isPlanUser = useSelector(selectors.selectIsPlanUser);

  const isCurrentPlan = currentTenant.plan === plan;

  // const buttonState = isCurrentPlan
  //   ? 'manage'
  //   : currentTenant.plan === Plans.values.free
  //   ? 'payment'
  //   : 'none';
  const buttonState = 'payment';
  const doCheckout = () => {
    dispatch(actions.doCheckout(plan));
  };

  // const doPortal = () => {
  //   dispatch(actions.doPortal());
  // };

  return (
    <div className='flex flex-col justify-between h-full p-4 mb-4 text-gray-900 border border-gray-200 rounded-md  dark:text-gray-200  duration-500 '>
      <div>
        <div className='flex-grow-0 mb-6 text-2xl font-bold text-center'>
          {i18n(`billing.plan.${planLabel}.time`)}
        </div>
        <div className='flex-grow-0 mb-4 text-3xl font-bold text-center'>
          {i18n(`billing.plan.${planLabel}.price`)} <br />
          {/* <span className='text-base font-normal'>
            {i18n(`billing.plan.${plan}.time`)}
          </span> */}
        </div>
      </div>

      <div>
        {isCurrentPlan &&
          currentTenant.planStatus === 'cancel_at_period_end' && (
            <p className='pt-2 pb-2 pl-4 -ml-4 -mr-4 text-sm text-left text-white bg-red-500 border-t border-b border-gray-200'>
              {i18n('billing.plan.cancelAtPeriodEnd')}
            </p>
          )}

        {isCurrentPlan && currentTenant.planStatus === 'error' && (
          <p className='pt-2 pb-2 pl-4 -ml-4 -mr-4 text-sm text-left text-white bg-red-500 border-t border-b border-gray-200'>
            {i18n('billing.plan.somethingWrong')}
          </p>
        )}

        {buttonState === 'payment' && (
          <button
            type='button'
            className='w-full px-4 py-2 tracking-wide text-black transition-colors duration-500 transform bg-green-300 rounded-md disabled:opacity-50 disabled:cursor-default dark:hover:bg-green-500 duration-500 focus:outline-none focus:bg-gray-600'
            disabled={!hasPermissionToEdit || !isPlanUser || loading}
            onClick={doCheckout}>
            {i18n('billing.plan.buyTime')}
          </button>
        )}

        {/* {buttonState === 'manage' && isPlanUser && (
          <button
            type='button'
            className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md disabled:opacity-50 disabled:cursor-default hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
            disabled={!hasPermissionToEdit || loading}
            onClick={doPortal}
          >
            {i18n('billing.plan.manage')}
          </button>
        )}

        {buttonState === 'manage' && !isPlanUser && (
          <>
            <span
              data-tip={i18n('billing.plan.notPlanUser')}
              data-for={`plan-not-plan-user-${plan}-tooltip`}
            >
              <button
                type='button'
                className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md disabled:opacity-50 disabled:cursor-default hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
                disabled={true}
              >
                {i18n('billing.plan.manage')}
              </button>
            </span>
            <ReactTooltip id={`plan-not-plan-user-${plan}-tooltip`} />
          </>
        )} */}
      </div>
    </div>
  );
}
