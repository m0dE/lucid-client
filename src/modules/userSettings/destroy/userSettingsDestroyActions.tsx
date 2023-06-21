import listActions from 'src/modules/userSettings/list/userSettingsListActions';
import UserSettingsService from 'src/modules/userSettings/userSettingsService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'USERSETTINGS_DESTROY';

const userSettingsDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: userSettingsDestroyActions.DESTROY_STARTED,
      });

      await UserSettingsService.destroyAll([id]);

      dispatch({
        type: userSettingsDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.userSettings.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/user-settings');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: userSettingsDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: userSettingsDestroyActions.DESTROY_ALL_STARTED,
      });

      await UserSettingsService.destroyAll(ids);

      dispatch({
        type: userSettingsDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.userSettings.destroyAll.success'),
      );

      getHistory().push('/user-settings');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: userSettingsDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default userSettingsDestroyActions;
