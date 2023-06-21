import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function UserSettingsView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.userSettings.fields.additionalTimeCredit')}
        value={record.additionalTimeCredit}
      />

      <TextViewItem
        label={i18n('entities.userSettings.fields.monthlyTimeCredit')}
        value={record.monthlyTimeCredit}
      />
    </div>
  );
}

export default UserSettingsView;
