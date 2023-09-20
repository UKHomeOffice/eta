'use strict';

const hof = require('hof');
const Notify = hof.components.notify;
const path = require('path');

// eslint-disable-next-line complexity
const getDataRows = (model) => {
  return [
    {
      table: [
        model.name && {
          name: model['name']
        },
        model.email && {
          email: model['email']
        },
        model.yourQuestion && {
          yourQuestion: model['yourQuestion']
        },
      ]
    },
    model['application-submitted'] && {
      table: [
        {
          value: model['etaReferenceNumber'] == ''? 'ETA reference number: not given' : 'ETA reference number: ' +  model['etaReferenceNumber'],
        },
        {
          value: model['application-submitted'] == 'Yes'? 'Application submitted' : 'Application not submitted',
        },
        {
          value: model['whatIsYourQuestionAbout']
        },
        {
          value: model['applicationMethod']
        },
        {
          value: model['questionOnlineOption']
        }
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
