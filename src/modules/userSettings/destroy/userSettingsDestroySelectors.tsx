import { createSelector } from 'reselect';

const selectRaw = (state) => state.userSettings.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const userSettingsDestroySelectors = {
  selectLoading,
};

export default userSettingsDestroySelectors;
