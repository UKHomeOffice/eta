
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
        step: '/how-applied',
        field: 'applicationMethod'
      },
      {
        step: '/details-submitted',
        field: 'yourQuestion'
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
          return req.sessionModel.get('etaReferenceNumber') === '' ? 'ETA reference number not given' : list;
        }
      }
    ]
  }
};
