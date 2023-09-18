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
      whatIsYourQuestionAbout: {
        isPageHeading: true,
        mixin: 'radio-group',
        validate: ['required'],
        legend: {
          className: 'visuallyhidden'
        },
        options: [
          'I have not received a confirmation email',
          'I have not received a decision',
          'Question about the decision on my ETA',
          'Something else'
        ]
      },
      whatIsYourQuestionAboutNotSubmitted: {
        isPageHeading: true,
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
      applicationMethod: {
        mixin: 'radio-group',
        validate: ['required'],
        legend: {
          className: 'visuallyhidden'
        },
        options: [
          'UK ETA app on Android',
          'UK ETA app on iPhone',
          'Online',
        ]
      },
      applyingMethod: {
        mixin: 'radio-group',
        validate: ['required'],
        legend: {
          className: 'visuallyhidden'
        },
        options: [
          'UK ETA app on Android',
          'UK ETA app on iPhone',
          'Online',
        ]
      },
      yourQuestion: {
        isPageHeading: false,
        mixin: 'textarea',
        'ignore-defaults': true,
        formatter: ['trim', 'hyphens'],
        validate: ['required', { type: 'maxlength', arguments: 2000 }],
        attributes: [{
          attribute: 'rows',
          value: 4
        }],
        className: ['govuk-input']
      },
      'your-question-not-submitted': {
        isPageHeading: false,
        labelClassName: 'visuallyhidden',
        mixin: 'textarea',
        'ignore-defaults': true,
        formatter: ['trim', 'hyphens'],
        validate: ['required', { type: 'maxlength', arguments: 2000 }],
        attributes: [{
          attribute: 'rows',
          value: 4
        }],
        className: ['govuk-input']
      },
      name: {
        validate: ['required', 'notUrl', { type: 'maxlength', arguments: 255 }],
      },
      nameNotApplied: {
        labelClassName: 'visuallyhidden',
        validate: ['required', 'notUrl', { type: 'maxlength', arguments: 255 }],
      },
      email: {
        validate: ['required', 'email', { type: 'maxlength', arguments: 255}]
      },
      'email-not-submitted': {
        labelClassName: 'visuallyhidden',
        validate: ['required', 'email', { type: 'maxlength', arguments: 255}]
      },
      etaReferenceNumber: {
        validate: [{ type: 'regex', arguments: /^$|((^[0-9]{4}(-[0-9]{4}){3}$))/ }],
      },
      questionAppOption: {
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
      questionOnlineOption: {
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