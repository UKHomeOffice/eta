/* eslint max-len: 0 */

module.exports = superclass => class extends superclass {
  validate(req, res, next) {
    if (((req.sessionModel.get('what-is-your-question-about') === 'I-have-not-received-a-decision'
    || req.sessionModel.get('what-is-your-question-about') === 'Question about the decision on my ETA'
    || req.sessionModel.get('what-is-your-question-about') === 'Something else')
    && (req.sessionModel.get('application-submitted') === 'Yes') && (req.form.values['eta-reference-number'] === '') )) {
      return next({
        'eta-reference-number': new this.ValidationError(
          'eta-reference-number',
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

    if (req.sessionModel.get('what-is-your-question-about') === 'I-have-not-received-a-confirmation-email') {
      locals.optional = true;
    }
    return locals;
  }
};
