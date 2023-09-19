/* eslint max-len: 0 */

module.exports = superclass => class extends superclass {
  validate(req, res, next) {

    // console.log(req.sessionModel.get('application-submitted'));

    // console.log("App Submitted: " + req.form.values['application-submitted']);

    // if(req.form.values.whatIsYourQuestionAbout === 'I have not received a decision') {
    //   console.log("correct question");
    // }

    // if(req.form.values['application-submitted'] === 'Yes') {
    //   console.log("app submitted");
    // }

    console.log("REACHED HERE");
    console.log("ETA REFERENCE: " + req.form.values['etaReferenceNumber'] === '');

    if (((req.sessionModel.get('whatIsYourQuestionAbout') === 'I have not received a decision' || req.sessionModel.get('whatIsYourQuestionAbout') === 'Question about the decision on my ETA' || req.sessionModel.get('whatIsYourQuestionAbout') === 'Something else') && (req.sessionModel.get('application-submitted') === 'Yes') && (req.form.values['etaReferenceNumber'] === '') )) {
      return next({
        etaReferenceNumber: new this.ValidationError(
          'etaReferenceNumber',
          {
            type: 'required'
          }
        )
      });
    }
    super.validate(req, res, next);
    return next;
  }

  locals(req, res) {
    const locals = super.locals(req, res);

    if (req.sessionModel.get('whatIsYourQuestionAbout') === 'I have not received a confirmation email') {
      locals.optional = true;
    }

    return locals;
  }

};
