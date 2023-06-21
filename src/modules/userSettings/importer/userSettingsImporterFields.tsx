import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'additionalTimeCredit',
    label: i18n('entities.userSettings.fields.additionalTimeCredit'),
    schema: schemas.integer(
      i18n('entities.userSettings.fields.additionalTimeCredit'),
      {},
    ),
  },
  {
    name: 'monthlyTimeCredit',
    label: i18n('entities.userSettings.fields.monthlyTimeCredit'),
    schema: schemas.integer(
      i18n('entities.userSettings.fields.monthlyTimeCredit'),
      {},
    ),
  },
];