import type { Translation } from 'vanilla-cookieconsent';

export const en: Translation = {
  consentModal: {
    title: 'Hello Dev, get some Cookie!',
    description:
      'We use cookies to ensure you get the best experience on our website. Some are necessary for the site to function, while others help us improve your experience.',
    acceptAllBtn: 'Accept all',
    acceptNecessaryBtn: 'Reject all',
    showPreferencesBtn: 'Manage preferences',
    footer: `<a href="/privacy">Privacy Policy</a>
<a href="/terms">Terms and conditions</a>`,
  },
  preferencesModal: {
    title: 'Consent Preferences Center',
    acceptAllBtn: 'Accept all',
    acceptNecessaryBtn: 'Reject all',
    savePreferencesBtn: 'Save preferences',
    closeIconLabel: 'Close modal',
    serviceCounterLabel: 'Service|Services',
    sections: [
      {
        title: 'Cookie Usage',
        description:
          'We use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want.',
      },
      {
        title:
          'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
        description:
          'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly.',
        linkedCategory: 'necessary',
      },
      {
        title: 'Functionality Cookies',
        description:
          'These cookies allow the website to remember the choices you have made in the past.',
        linkedCategory: 'functionality',
      },
    ],
  },
};
