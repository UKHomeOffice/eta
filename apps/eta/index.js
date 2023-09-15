'use strict';

const config = require('../../config');
const summary = require('hof').components.summary;
const caseworkerEmailer = require('./behaviours/caseworker-email')(config.email);

module.exports = {
  name: 'eta',
  baseUrl: '/',
  pages: {
    '/terms-and-conditions': 'terms',
    '/cookies': 'cookies'
  },
  steps: {
    '/application-submitted': {
      fields: ['application-submitted'],
      forks: [{
        target: '/what-is-your-question-about-submitted-eta',
        condition: {
          field: 'application-submitted',
          value: 'yes'
        }
      }],
      next: '/details-submitted',
      backLink: false
    },
    '/details-submitted': {
      fields: ['yourQuestion', 'email', 'name', 'etaReferenceNumber'],
      next: '/confirm'
    },
    '/what-is-your-question-about-submitted-eta': {

    },
    '/what-is-your-question-about-eta': {

    },
    '/confirm': {
      behaviours: [summary, caseworkerEmailer],
      next: '/confirmation'
    },
    '/confirmation': {
      template: 'confirmation',
      backLink: false
    }
  }
};
