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
    // Needs conditional logic for this step to decide which screen to go next dependent on user selection
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
      fields: ['yourQuestion', 'nameNotApplied', 'email'],
      next: '/confirm'
    },
    '/confirm': {
      behaviours: [summary],
      sections: {
        'application-details': [
          'application-submitted',
          'whatIsYourQuestionAbout',
          'whatIsYourQuestionAboutNotSubmitted',
          'applicationMethod',
          'applyingMethod',
          // Need to check how to apply a conditional for the following 2 fields (because there's a fork for the flow)
          'questionOnlineOption',
          'questionAppOption',
          'yourQuestion',
          'name',
          'nameNotApplied',
          'email',
          'etaReferenceNumber'
        ]
      },
      next: '/confirm'
    },
    '/confirmation': {
      template: 'confirmation',
      backLink: false
    }
  }
};
