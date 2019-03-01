/* eslint-disable no-underscore-dangle */
const Base = require('./base');

class Alexa extends Base {
  /**
   *
   */
  _wrappedCallback(event, callback) {
    return (err, originalResponse) => {
      this._send(event, originalResponse);
      callback(err, originalResponse);
    };
  }

  /**
   *
   */
  AlexaWithCallback(originalHandler) {
    return (event, context, callback) => {
      const wrappedCallback = this._wrappedCallback(event, callback);
      originalHandler(event, context, wrappedCallback);
    };
  }

  Alexa(originalHandler) {
    return this.AlexaWithCallback(originalHandler);
  }

  /**
   *
   */
  AlexaWithPromise(originalHandler) {
    return async (event, context, cb) => {
      const originalResponse = await originalHandler(event, context, cb);
      this._send(event, originalResponse);
      return originalResponse;
    };
  }
}

module.exports = Alexa;
