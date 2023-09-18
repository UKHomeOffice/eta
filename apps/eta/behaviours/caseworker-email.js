'use strict';

const hof = require('hof');
const Notify = hof.components.notify;
const path = require('path');
const moment = require('moment');

// eslint-disable-next-line complexity
const getDataRows = (model, translate) => {
  return [
    {
      title: 'Contact details',
      table: [
        model.name && {
          name: model['name'] + "\n"
        },
        model.email && {
          email: model['email'] + "\n"
        }
      ]
    },
    model['application-submitted'] && {
      questionTitle: translate('fields.whatIsYourQuestionAbout.label'),
      table: [
        {
          value: model['application-submitted'] == 'yes'? 'Application submitted' : 'Application not submitted',
        },
        {
          value: model['etaReferenceNumber'] == ''? 'ETA reference number: not given' : 'ETA reference number: ' +  model['etaReferenceNumber'],
        },
      ]
    }
  ].filter(Boolean);
};

module.exports = config => {
  return Notify(Object.assign({}, config, {
    recipient: config.caseworker,
    subject: (model, translate) => translate('pages.email.subject'),
    template: path.resolve(__dirname, '../emails/caseworker.html'),
    parse: (model, translate) => {
      return Object.assign(model, {
        data: getDataRows(model, translate)
      });
    }
  }));
};
