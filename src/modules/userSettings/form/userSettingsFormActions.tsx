import UserSettingsService from 'src/modules/userSettings/userSettingsService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'USERSETTINGS_FORM';

const userSettingsFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: userSettingsFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await UserSettingsService.find(id);
      }

      dispatch({
        type: userSettingsFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: userSettingsFormActions.INIT_ERROR,
      });

      getHistory().push('/user-settings');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: userSettingsFormActions.CREATE_STARTED,
      });

      await UserSettingsService.create(values);

      dispatch({
        type: userSettingsFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.userSettings.create.success'),
      );

      getHistory().push('/user-settings');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: userSettingsFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: userSettingsFormActions.UPDATE_STARTED,
      });

      await UserSettingsService.update(id, values);

      dispatch({
        type: userSettingsFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.userSettings.update.success'),
      );

      getHistory().push('/user-settings');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: userSettingsFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default userSettingsFormActions;
