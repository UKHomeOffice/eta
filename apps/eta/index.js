'use strict';

const config = require('../../config');
const summary = require('hof').components.summary;
const caseworkerEmailer = require('./behaviours/caseworker-email')(config.email);
const customerEmailer = require('./behaviours/customer-email')(config.email);
const conditionalValidate = require('./behaviours/conditional-validate');

module.exports = {
  name: 'eta',
  baseUrl: '/',
  pages: {
    '/terms-and-conditions': 'terms',
    '/cookies': 'cookies'
  },
  steps: {
    '/start': {
      template: 'start',
      next: '/application-submitted'
    },
    '/accessibility': {
      template: 'accessibility'
    },
    '/application-submitted': {
      fields: ['application-submitted'],
      forks: [{
        target: '/question-about-submitted',
        condition: {
          field: 'application-submitted',
          value: 'Yes'
        }
      }],
      next: '/question-about-not-submitted'
    },
    '/question-about-submitted': {
      fields: ['what-is-your-question-about'],
      forks: [{
        target: '/details-submitted',
        condition: {
          field: 'what-is-your-question-about',
          value: 'Question about the decision on my ETA'
        }
      }],
      continueOnEdit: true,
      next: '/how-applied'
    },
    '/how-applied': {
      fields: ['application-method'],
      next: '/details-submitted',
      continueOnEdit: true
    },
    '/details-submitted': {
      fields: ['your-question', 'email', 'name', 'eta-reference-number'],
      template: 'your-question-submitted',
      behaviours: [conditionalValidate],
      next: '/confirm'
    },
    '/question-about-not-submitted': {
      fields: ['what-is-your-question-about-not-submitted'],
      forks: [{
        target: '/how-applying',
        condition: {
          field: 'what-is-your-question-about-not-submitted',
          value: 'Applying for an ETA'
        }
      }],
      next: '/details-not-submitted'
    },
    '/how-applying': {
      fields: ['applying-method'],
      forks: [{
        target: '/question-online',
        condition: {
          field: 'applying-method',
          value: 'Online'
        }
      }],
      next: '/question-app'
    },
    '/question-online': {
      fields: ['question-online-option'],
      next: '/details-not-submitted'
    },
    '/question-app': {
      fields: ['question-app-option'],
      next: '/details-not-submitted'
    },
    '/details-not-submitted': {
      fields: ['your-question-not-submitted', 'name-not-applied', 'email-not-submitted'],
      template: 'your-question-not-submitted',
      next: '/confirm'
    },
    '/confirm': {
      behaviours: [summary, caseworkerEmailer, customerEmailer, 'complete'],
      sections: require('./sections/summary-data-sections'),
      next: '/confirmation'
    },
    '/confirmation': {
      template: 'confirmation',
      backLink: false
    }
  }
};
