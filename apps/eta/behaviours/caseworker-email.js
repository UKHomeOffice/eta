'use strict';

const hof = require('hof');
const Notify = hof.components.notify;
const path = require('path');

// eslint-disable-next-line complexity
const getDataRows = model => {
  return [
    model['application-submitted'] && {
      table: [
        model['eta-reference-number'] && {
          value: model['eta-reference-number'] === '' ? 'ETA reference number: not given'
            : 'ETA reference number: ' +  model['eta-reference-number']
        },
        model['passport-number'] && {
          value: model['passport-number'] === '' ? 'Passport number: Not provided'
            : 'Passport number: ' +  model['passport-number']
        },
        {
          value: model['application-submitted']  === 'Yes' ? 'Application submitted' : 'Application not submitted'
        },
        {
          value: model['what-is-your-question-about'] === 'I-have-not-received-a-confirmation-email' ||
            model['what-is-your-question-about'] === 'I-have-not-received-a-decision' ?
            model['what-is-your-question-about'].replace(/-/g, ' ') : model['what-is-your-question-about']
        },
        {
          value: model['what-is-your-question-about-not-submitted']
        },
        {
          value: model['application-method']
        },
        {
          value: model['applying-method']
        },
        {
          value: model['question-app-option']
        },
        {
          value: model['question-online-option']
        }
      ]
    }
  ].filter(Boolean);
};

const getSubject = model => {
  let subject;

  if (model['what-is-your-question-about']) {
    subject = model['what-is-your-question-about'] === 'I-have-not-received-a-confirmation-email' ||
    model['what-is-your-question-about'] === 'I-have-not-received-a-decision' ?
      model['what-is-your-question-about'].replace(/-/g, ' ') : model['what-is-your-question-about'];
  }
  if (model['what-is-your-question-about-not-submitted']) {
    subject = model['what-is-your-question-about-not-submitted'];
  }
  if (model['question-app-option']) {
    subject +=  ' - ' + model['question-app-option'];
  }
  if (model['question-online-option']) {
    subject +=  ' - ' + model['question-online-option'];
  }

  return subject;
};

module.exports = config => {
  return Notify(Object.assign({}, config, {
    recipient: config.caseworker,
    subject: model => getSubject(model),
    template: path.resolve(__dirname, '../emails/caseworker.html'),
    parse: (model, translate) => {
      return Object.assign(model, {
        data: getDataRows(model, translate)
      });
    }
  }));
};
