'use strict';

module.exports = {
  'application-submitted': {
    mixin: 'radio-group',
    options: ['Yes', 'No'],
    validate: 'required',
    legend: {
      className: 'visuallyhidden'
    }
  },
  'what-is-your-question-about': {
    isPageHeading: false,
    mixin: 'radio-group',
    validate: ['required'],
    legend: {
      className: 'visuallyhidden'
    },
    options: [
      'I-have-not-received-a-confirmation-email',
      'I-have-not-received-a-decision',
      'Question about the decision on my ETA',
      'Something else'
    ]
  },
  'what-is-your-question-about-not-submitted': {
    isPageHeading: false,
    mixin: 'radio-group',
    validate: ['required'],
    legend: {
      className: 'visuallyhidden'
    },
    options: [
      'Do I need an ETA?',
      'Applying for an ETA',
      'Something else'
    ]
  },
  'application-method': {
    mixin: 'radio-group',
    validate: ['required'],
    legend: {
      className: 'visuallyhidden'
    },
    options: [
      'UK ETA app on Android',
      'UK ETA app on iPhone',
      'Online'
    ]
  },
  'applying-method': {
    mixin: 'radio-group',
    validate: ['required'],
    legend: {
      className: 'visuallyhidden'
    },
    options: [
      'UK ETA app on Android',
      'UK ETA app on iPhone',
      'Online'
    ]
  },
  'your-question': {
    isPageHeading: false,
    labelClassName: ['govuk-!-font-weight-bold'],
    mixin: 'textarea',
    validate: ['required', 'notUrl', { type: 'regex', arguments: /^[^\[\]\|<>]{1,2000}$/ },
      { type: 'maxlength', arguments: 2000 }],
    attributes: [{
      attribute: 'rows',
      value: 4
    }]
  },
  'your-question-not-submitted': {
    isPageHeading: false,
    labelClassName: ['govuk-!-font-weight-bold'],
    mixin: 'textarea',
    validate: ['required', 'notUrl', { type: 'regex', arguments: /^[^\[\]\|<>]{1,2000}$/ },
      { type: 'maxlength', arguments: 2000 }],
    attributes: [{
      attribute: 'rows',
      value: 4
    }]
  },
  name: {
    labelClassName: ['govuk-!-font-weight-bold'],
    validate: ['required', 'notUrl', { type: 'regex', arguments: /^[\s\S]{1,255}$/ }]
  },
  'name-not-applied': {
    labelClassName: ['govuk-!-font-weight-bold'],
    validate: ['required', 'notUrl', { type: 'regex', arguments: /^[\s\S]{1,255}$/ }]
  },
  email: {
    labelClassName: ['govuk-!-font-weight-bold'],
    validate: ['required', { type: 'regex', arguments: /^[a-zA-Z0-9_\-\@\.]{1,255}$/ }, 'email']
  },
  'email-not-submitted': {
    labelClassName: ['govuk-!-font-weight-bold'],
    validate: ['required', { type: 'regex', arguments: /^[a-zA-Z0-9_\-\@\.]{1,255}$/ }, 'email']
  },
  'eta-reference-number': {
    labelClassName: ['govuk-!-font-weight-bold'],
    validate: ['notUrl', { type: 'regex', arguments: /^$|((^[0-9]{4}(-[0-9]{4}){3}$))/ }]
  },
  'passport-number': {
    labelClassName: ['govuk-!-font-weight-bold'],
    validate: ['notUrl', { type: 'regex', arguments: /^$|^[a-zA-Z0-9]{1,9}$/ },
      { type: 'maxlength', arguments: 9 }]
  },
  'question-app-option': {
    mixin: 'radio-group',
    validate: ['required'],
    legend: {
      className: 'visuallyhidden'
    },
    options: [
      'Confirming my email address with a security code',
      'Taking a photo of myself or my passport',
      'Scanning my face',
      'Scanning the chip in my passport',
      'Paying for my application',
      'Something else'
    ]
  },
  'question-online-option': {
    mixin: 'radio-group',
    validate: ['required'],
    legend: {
      className: 'visuallyhidden'
    },
    options: [
      'Confirming my email address with a security code',
      'Taking a photo of myself or my passport',
      'Scanning my face',
      'Paying for my application',
      'Something else'
    ]
  }
};
