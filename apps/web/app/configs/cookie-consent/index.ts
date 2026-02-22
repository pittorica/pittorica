import type { CookieConsentConfig } from 'vanilla-cookieconsent';

import { en } from './en';

export const cookieConsentConfig: CookieConsentConfig = {
  revision: 1,

  disablePageInteraction: true,
  guiOptions: {
    consentModal: {
      layout: 'box inline',
      position: 'middle center',
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    functionality: {},
  },
  language: {
    default: 'en',
    autoDetect: 'browser',
    translations: {
      en,
    },
  },
};
