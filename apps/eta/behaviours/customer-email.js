'use strict';

const hof = require('hof');
const Notify = hof.components.notify;
const path = require('path');

// eslint-disable-next-line complexity
const getDataRows = model => {
  return [
    {
      table: [
        model.name && {
          name: model.name
        },
        model.nameNotApplied && {
          name: model.nameNotApplied
        },
        model.email && {
          email: model.email
        },
        model['email-not-submitted'] && {
          email: model.model['email-not-submitted']
        },
        model.yourQuestion && {
          yourQuestion: model.yourQuestion
        },
        model['your-question-not-submitted'] && {
          yourQuestion: model['your-question-not-submitted']
        },
        model.whatIsYourQuestionAbout &&  {
          value: model.whatIsYourQuestionAbout === 'I have not received a confirmation email' ||
              model.whatIsYourQuestionAbout ===  'I have not received a decision' ?
            'If you are waiting for a decision' : ''
        }
      ]
    }
  ].filter(Boolean);
};

module.exports = config => {
  return Notify(Object.assign({}, config, {
    recipient: model => model.email,
    subject: (model, translate) => translate('pages.email.subject'),
    template: path.resolve(__dirname, '../emails/customer.html'),
    parse: (model, translate) => {
      return Object.assign(model, {
        data: getDataRows(model, translate)
      });
    }
  }));
};
