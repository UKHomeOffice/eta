'use strict';

module.exports = {
  'has-application-been-submitted': {
    mixin: 'radio-group',
    options: ['yes', 'no'],
    validate: 'required',
    legend: {
      className: 'visuallyhidden'
    }
  }
};
