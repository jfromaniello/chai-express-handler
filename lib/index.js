module.exports = function(chai, _) {
  
  /**
   * Expose handler test
   */
  var Test = require('./test');
  
  chai.express = chai.express || {};
  chai.express.handler = function(callbacks) {
    return new Test(callbacks);
  };
  
  
  /**
   * Aliases.
   */
  var Assertion = chai.Assertion;
  
  /**
   * ### .status (code)
   *
   * Assert that a response has a supplied status.
   *
   * ```js
   * expect(res).to.have.status(200);
   * ```
   *
   * @param {Number} code
   * @name status
   * @api public
   */
  Assertion.addMethod('status', function(code) {
    new Assertion(this._obj).to.have.property('statusCode');
    var statusCode = this._obj.statusCode;

    this.assert(
        statusCode == code
      , 'expected #{this} to have status code #{exp} but got #{act}'
      , 'expected #{this} to not have status code #{act}'
      , code  // expected
      , statusCode  // actual
    );
  });
  
  /**
   * ### .body (data)
   *
   * Assert that a response has a supplied body.
   *
   * ```js
   * expect(res).to.have.body('hello, world');
   * ```
   *
   * @param {String} data
   * @name status
   * @api public
   */
  Assertion.addMethod('body', function(data) {
    new Assertion(this._obj).to.have.property('body');
    var body = this._obj.body;

    this.assert(
        body === data
      , 'expected #{this} to have body #{exp} but got #{act}'
      , 'expected #{this} to not have body #{act}'
      , data  // expected
      , body  // actual
    );
  });
  
};
