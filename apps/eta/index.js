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
      fields: ['whatIsYourQuestionAbout'],
      forks: [{
        target: '/details-submitted',
        condition: {
          field: 'whatIsYourQuestionAbout',
          value: 'Question about the decision on my ETA'
        }
      }],
      next: '/how-applied'
    },
    '/how-applied': {
      fields: ['applicationMethod'],
      next: '/details-submitted'
    },
    '/details-submitted': {
      fields: ['yourQuestion', 'email', 'name', 'etaReferenceNumber'],
      next: '/confirm'
    },
    '/question-about-not-submitted': {
      fields: ['whatIsYourQuestionAboutNotSubmitted'],
      forks: [{
        target: '/how-applying',
        condition: {
          field: 'whatIsYourQuestionAboutNotSubmitted',
          value: 'Applying for an ETA'
        }
      }],
      next: '/details-not-submitted'
    },
    '/how-applying': {
      fields: ['applyingMethod'],
      forks: [{
        target: '/question-online',
        condition: {
          field: 'applyingMethod',
          value: 'Online'
        }
      }],
      next: '/question-app'
    },
    '/question-online': {
      fields: ['questionOnlineOption'],
      next: '/details-not-submitted'
    },
    '/question-app': {
      fields: ['questionAppOption'],
      next: '/details-not-submitted'
    },
    '/details-not-submitted': {
      fields: ['your-question-not-submitted', 'nameNotApplied', 'email-not-submitted'],
      template: 'your-question',
      next: '/confirm'
    },
    '/confirm': {
      behaviours: [summary],
      sections: require('./sections/summary-data-sections'),
      next: '/confirm'
    },
    '/confirmation': {
      template: 'confirmation',
      backLink: false
    }
  }
};
