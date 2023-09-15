'use strict';

module.exports = {
  'application-submitted': {
    mixin: 'radio-group',
    options: ['yes', 'no'],
    validate: 'required',
    legend: {
      className: 'visuallyhidden'
    }
  },
  yourQuestion: {
    mixin: 'textarea',
    labelClassName: 'visuallyhidden',
    'ignore-defaults': true,
    formatter: ['trim', 'hyphens'],
    validate: ['required', { type: 'maxlength', arguments: 2000 }],
    attributes: [{
      attribute: 'rows',
      value: 4
    }],
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  name: {
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 255 }],
  },
  email: {
    isPageHeading: true,
    validate: ['required', 'email', { type: 'maxlength', arguments: 255 }]
  },
  etaReferenceNumber: {
    isPageHeading: true,
    validate: ['required', { type: 'maxlength', arguments: 255 }]
  }
};
