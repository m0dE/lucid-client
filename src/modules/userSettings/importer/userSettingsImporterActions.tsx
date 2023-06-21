import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/userSettings/importer/userSettingsImporterSelectors';
import UserSettingsService from 'src/modules/userSettings/userSettingsService';
import fields from 'src/modules/userSettings/importer/userSettingsImporterFields';
import { i18n } from 'src/i18n';

const userSettingsImporterActions = importerActions(
  'USERSETTINGS_IMPORTER',
  selectors,
  UserSettingsService.import,
  fields,
  i18n('entities.userSettings.importer.fileName'),
);

export default userSettingsImporterActions;