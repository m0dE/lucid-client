// Place the URL here with the /api suffix.
// Ex.:`https://domain.com/api`;
const backendUrl = `https://www.chatsuggest.com/api`;

// SwaggerUI Documentation URL
// Leave black if documentation should be hidden
const apiDocumentationUrl = `https://www.chatsuggest.com/documentation`;

/**
 * Frontend URL.
 */
const frontendUrl = {
  host: 'https://www.chatsuggest.com',
  protocol: 'https',
};

/**
 * Tenant Mode
 * multi: Allow new users to create new tenants.
 * multi-with-subdomain: Same as multi, but enable access to the tenant via subdomain.
 * single: One tenant, the first user to register will be the admin.
 */
const tenantMode = 'multi';

/**
 * Plan payments configuration.
 */
const isPlanEnabled = true;
const stripePublishableKey =
  'pk_live_51MgufeAcEApGkXjo9Ub1H0MmCavoSXrcUU1jAboafKLRzX7jdcKJeWqgdi8uToaWLGhkFbLiZNstH79septPQWaE008tqMRvAQ';
const googleClientId =
  '945732858898-dcj77u2sjndrj0g0v86gg30ej6vdg3p5.apps.googleusercontent.com';

const joinDiscordLink = 'https://discord.com/invite/maXdhAXE9b';

const chatGptApiUrl = `https://api.openai.com/v1/chat/completions`;
const chatGptApiKey = `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`;
const assemblyUrl = `wss://api.assemblyai.com/v2/realtime/ws?sample_rate=16000`;

export default {
  frontendUrl,
  backendUrl,
  apiDocumentationUrl,
  tenantMode,
  isPlanEnabled,
  stripePublishableKey,
  googleClientId,
  joinDiscordLink,
  chatGptApiKey,
  chatGptApiUrl,
  assemblyUrl,
};
