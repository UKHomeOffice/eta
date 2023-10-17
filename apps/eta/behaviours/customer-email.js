'use strict';

const hof = require('hof');
const Notify = hof.components.notify;
const path = require('path');

// eslint-disable-next-line complexity
const getDataRows = model => {
  return [
    {
      table: [
        model['what-is-your-question-about'] &&  {
          value: model['what-is-your-question-about'] === 'I-have-not-received-a-confirmation-email' ||
              model['what-is-your-question-about'] ===  'I-have-not-received-a-decision' ?
            'If you are waiting for a decision' : ''
        }
      ]
    }
  ].filter(Boolean);
};

module.exports = config => {
  return Notify(Object.assign({}, config, {
    recipient: model => model.email || model['email-not-submitted'],
    subject: (model, translate) => translate('pages.email.subject'),
    template: path.resolve(__dirname, '../emails/customer.html'),
    parse: (model, translate) => {
      return Object.assign(model, {
        data: getDataRows(model, translate)
      });
    }
  }));
};
