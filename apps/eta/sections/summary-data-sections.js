
module.exports = {
    'case-details': {
      steps: [
        {
          step: '/application-submitted',
          field: 'application-submitted'
        },
        {
          step: '/question-about-submitted',
          field: 'whatIsYourQuestionAbout'
        },
        {
          step: '/question-about-not-submitted',
          field: 'whatIsYourQuestionAboutNotSubmitted'
        },
        {
          step: '/how-applied',
          field: 'applicationMethod'
        },
        {
          step: '/how-applying',
          field: 'applyingMethod'
        },
        {
          step: '/question-app',
          field: 'questionAppOption'
        },
        {
          step: '/question-online',
          field: 'questionOnlineOption'
        },
        {
          step: '/details-submitted',
          field: 'yourQuestion'
        },
        {
          step: '/details-not-submitted',
          field: 'your-question-not-submitted'
        },
        {
          step: '/details-not-submitted',
          field: 'nameNotApplied'
        },
        {
          step: '/details-not-submitted',
          field: 'email-not-submitted'
        },
        {
          step: '/details-submitted',
          field: 'email'
        },
        {
          step: '/details-submitted',
          field: 'name'
        },
        {
          step: '/details-submitted',
          field: 'etaReferenceNumber',
          parse: (list, req) => {
            if((req.sessionModel.get('etaReferenceNumber') === '') && ((req.sessionModel.get('whatIsYourQuestionAbout') === 'I have not received a confirmation email') && (req.sessionModel.get('application-submitted') === 'Yes'))) {
              return '';
            } else {
              return req.sessionModel.get('etaReferenceNumber') === '' ? 'ETA reference number not given' : list;
            }
          }
        }
      ]
    }
  };