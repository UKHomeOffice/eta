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
          email: model['email-not-submitted']
        },
        model.yourQuestion && {
          yourQuestion: model.yourQuestion
        },
        model['your-question-not-submitted'] && {
          yourQuestion: model['your-question-not-submitted']
        },
        model.etaReferenceNumber && {
          value: model.etaReferenceNumber  === '' ? 'ETA reference number: not given'
            : 'ETA reference number: ' +  model.etaReferenceNumber
        }
      ]
    },
    model['application-submitted'] && {
      table: [
        {
          value: model['application-submitted']  === 'Yes' ? 'Application submitted' : 'Application not submitted'
        },
        {
          value: model.whatIsYourQuestionAbout
        },
        {
          value: model.whatIsYourQuestionAboutNotSubmitted
        },
        {
          value: model.applicationMethod
        },
        {
          value: model.questionAppOption
        },
        {
          value: model.questionOnlineOption
        }
      ]
    }
  ].filter(Boolean);
};

const getSubject = model => {
  let subject;

  if (model.whatIsYourQuestionAbout) {
    subject = model.whatIsYourQuestionAbout;
  }
  if (model.whatIsYourQuestionAboutNotSubmitted) {
    subject = model.whatIsYourQuestionAboutNotSubmitted;
  }
  if (model.questionAppOption) {
    subject +=  ' - ' + model.questionAppOption;
  }
  if (model.questionOnlineOption) {
    subject +=  ' - ' + model.questionOnlineOption;
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
