'use strict';

const summary = require('hof').components.summary;

module.exports = {
  name: 'eta',
  baseUrl: '/',
  pages: {
    '/terms-and-conditions': 'terms',
    '/cookies': 'cookies'
  },
  steps: {
    '/has-application-been-submitted': {
      fields: ['has-application-been-submitted'],
      forks: [{
        target: '/what-is-your-question-about-submitted-eta',
        condition: {
          field: 'has-application-been-submitted',
          value: 'yes'
        }
      }],
      next: '/confirm',
      backLink: false
    },
    '/what-is-your-question-about-submitted-eta': {

    },
    '/what-is-your-question-about-eta': {

    },
    '/confirm': {
      behaviours: [summary],
      next: '/confirmation'
    },
    '/confirmation': {
      template: 'confirmation',
      backLink: false
    }
  }
};
