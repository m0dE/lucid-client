import Roles from 'src/security/roles';
import Plans from 'src/security/plans';
import Storage from 'src/security/storage';

const storage = Storage.values;
const roles = Roles.values;
const plans = Plans.values;

class Permissions {
  static get values() {
    return {
      tenantEdit: {
        id: 'tenantEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
      },
      tenantDestroy: {
        id: 'tenantDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
      },
      planEdit: {
        id: 'planEdit',
        allowedRoles: [roles.admin, roles.user],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
      },
      planRead: {
        id: 'planRead',
        allowedRoles: [roles.admin, roles.user],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
      },
      userEdit: {
        id: 'userEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
      },
      userDestroy: {
        id: 'userDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
      },
      userCreate: {
        id: 'userCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
      },
      userImport: {
        id: 'userImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
      },
      userRead: {
        id: 'userRead',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
      },
      userAutocomplete: {
        id: 'userAutocomplete',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
        allowedStorage: [
          storage.settingsBackgroundImages,
          storage.settingsLogos,
        ],
      },
      userSettingsImport: {
        id: 'userSettingsImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
      },
      userSettingsCreate: {
        id: 'userSettingsCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
        allowedStorage: [],
      },
      userSettingsEdit: {
        id: 'userSettingsEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
        allowedStorage: [],
      },
      userSettingsDestroy: {
        id: 'userSettingsDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
        allowedStorage: [],
      },
      userSettingsRead: {
        id: 'userSettingsRead',
        allowedRoles: [],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
      },
      userSettingsAutocomplete: {
        id: 'userSettingsAutocomplete',
        allowedRoles: [],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
      },

      promptImport: {
        id: 'promptImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
      },
      promptCreate: {
        id: 'promptCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
        allowedStorage: [],
      },
      promptEdit: {
        id: 'promptEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
        allowedStorage: [],
      },
      promptDestroy: {
        id: 'promptDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
        allowedStorage: [],
      },
      promptRead: {
        id: 'promptRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
      },
      promptAutocomplete: {
        id: 'promptAutocomplete',
        allowedRoles: [roles.admin, roles.custom, roles.user],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
      },

      chatImport: {
        id: 'chatImport',
        allowedRoles: [roles.admin, roles.user],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
      },
      chatCreate: {
        id: 'chatCreate',
        allowedRoles: [roles.admin, roles.user],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
        allowedStorage: [],
      },
      chatEdit: {
        id: 'chatEdit',
        allowedRoles: [roles.admin, roles.user],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
        allowedStorage: [],
      },
      chatDestroy: {
        id: 'chatDestroy',
        allowedRoles: [roles.admin, roles.user],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
        allowedStorage: [],
      },
      chatRead: {
        id: 'chatRead',
        allowedRoles: [roles.admin, roles.user],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
      },
      chatAutocomplete: {
        id: 'chatAutocomplete',
        allowedRoles: [roles.admin, roles.user],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
      },

      chatLogImport: {
        id: 'chatLogImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
      },
      chatLogCreate: {
        id: 'chatLogCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
        allowedStorage: [],
      },
      chatLogEdit: {
        id: 'chatLogEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
        allowedStorage: [],
      },
      chatLogDestroy: {
        id: 'chatLogDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
        allowedStorage: [],
      },
      chatLogRead: {
        id: 'chatLogRead',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
      },
      chatLogAutocomplete: {
        id: 'chatLogAutocomplete',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
      },

      appImport: {
        id: 'appImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
      },
      appCreate: {
        id: 'appCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
        allowedStorage: [],
      },
      appEdit: {
        id: 'appEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
        allowedStorage: [],
      },
      appDestroy: {
        id: 'appDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
        allowedStorage: [],
      },
      appRead: {
        id: 'appRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
      },
      appAutocomplete: {
        id: 'appAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [
          plans.free,
          plans.experimental,
          plans.basic,
          plans.professional,
        ],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
