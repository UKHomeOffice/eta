
module.exports = {
  'case-details': {
    steps: [
      {
        step: '/application-submitted',
        field: 'application-submitted'
      },
      {
        step: '/question-about-submitted',
        field: 'what-is-your-question-about'
      },
      {
        step: '/question-about-not-submitted',
        field: 'what-is-your-question-about-not-submitted'
      },
      {
        step: '/how-applied',
        field: 'application-method'
      },
      {
        step: '/how-applying',
        field: 'applying-method'
      },
      {
        step: '/question-app',
        field: 'question-app-option'
      },
      {
        step: '/question-online',
        field: 'question-online-option'
      },
      {
        step: '/details-submitted',
        field: 'your-question'
      },
      {
        step: '/details-not-submitted',
        field: 'your-question-not-submitted'
      },
      {
        step: '/details-not-submitted',
        field: 'name-not-applied'
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
        field: 'eta-reference-number',
        parse: (list, req) => {
          if((req.sessionModel.get('eta-reference-number') === '')
          && ((req.sessionModel.get('what-is-your-question-about') === 'I-have-not-received-a-confirmation-email')
          && (req.sessionModel.get('application-submitted') === 'Yes'))) {
            return 'ETA reference number not given';
          }
          return req.sessionModel.get('eta-reference-number') === '' ? 'ETA reference number not given' : list;
        }
      }
    ]
  }
};
