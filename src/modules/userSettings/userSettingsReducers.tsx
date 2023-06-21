import list from 'src/modules/userSettings/list/userSettingsListReducers';
import form from 'src/modules/userSettings/form/userSettingsFormReducers';
import view from 'src/modules/userSettings/view/userSettingsViewReducers';
import destroy from 'src/modules/userSettings/destroy/userSettingsDestroyReducers';
import importerReducer from 'src/modules/userSettings/importer/userSettingsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
