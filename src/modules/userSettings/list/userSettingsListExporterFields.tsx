import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.userSettings.fields.id'),
  },
  {
    name: 'additionalTimeCredit',
    label: i18n('entities.userSettings.fields.additionalTimeCredit'),
  },
  {
    name: 'monthlyTimeCredit',
    label: i18n('entities.userSettings.fields.monthlyTimeCredit'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.userSettings.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.userSettings.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
