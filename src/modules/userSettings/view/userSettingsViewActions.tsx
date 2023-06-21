import UserSettingsService from 'src/modules/userSettings/userSettingsService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'USERSETTINGS_VIEW';

const userSettingsViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: userSettingsViewActions.FIND_STARTED,
      });

      const record = await UserSettingsService.find(id);

      dispatch({
        type: userSettingsViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: userSettingsViewActions.FIND_ERROR,
      });

      getHistory().push('/user-settings');
    }
  },
};

export default userSettingsViewActions;
