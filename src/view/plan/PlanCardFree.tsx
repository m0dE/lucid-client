import React from 'react';
import { useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import authSelectors from 'src/modules/auth/authSelectors';
import Plans from 'src/security/plans';

export default function PlanCardFree(props) {
  const currentTenant = useSelector(
    authSelectors.selectCurrentTenant,
  );

  const isCurrentPlan =
    currentTenant.plan === Plans.values.free;

  const buttonState = isCurrentPlan ? 'current' : null;

  return (
    <div className="flex flex-col justify-between h-full p-4 mb-4 text-gray-900 border border-gray-200 rounded-md dark:text-gray-200 dark:border-gray-600">
      <div>
        <div className="flex-grow-0 mb-6 text-2xl font-bold text-center">
          {i18n(`billing.plan.${Plans.values.free}.label`)}
        </div>
        <div className="flex-grow-0 mb-4 text-3xl font-bold text-center">
          {i18n(`billing.plan.free.price`)}
          <span className="text-base font-normal">
            {i18n('billing.plan.pricingPeriod')}
          </span>
        </div>
      </div>

      <div>
        {buttonState === 'current' && (
          <button
            type="button"
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md disabled:opacity-50 disabled:cursor-default hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            disabled={true}
          >
            {i18n('billing.plan.current')}
          </button>
        )}
      </div>
    </div>
  );
}
