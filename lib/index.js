/* eslint-disable no-underscore-dangle */

const axios = require('axios');
const axiosRetry = require('axios-retry');
const { isErrorRetryable } = require('./util');

/**
 *
 * @param {string} writeKey
 * @param {object} options
 */
module.exports = (writeKey, options = {}) => {
  const { retryCount = 3, url } = options;

  axiosRetry(axios, {
    retries: retryCount,
    retryCondition: isErrorRetryable,
    retryDelay: axiosRetry.exponentialDelay,
  });

  function Tropos() { }

  /**
   *
   */
  Tropos._send = function _send(request, response) {
    const params = {
      method: 'POST',
      url,
      data: {
        request,
        response,
      },
      auth: {
        username: writeKey,
        password: '',
      },
    };
    axios(params)
      .catch(error => console.log(error));
  };

  /**
   *
   */
  Tropos._wrappedCallback = function _wrappedCallback(event, callback) {
    return (err, originalResponse) => {
      this._send(event, originalResponse);
      callback(err, originalResponse);
    };
  };

  /**
   *
   */
  Tropos.AlexaWithCallback = function Alexa(originalHandler) {
    return (event, context, callback) => {
      const wrappedCallback = this._wrappedCallback(event, callback);
      originalHandler(event, context, wrappedCallback);
    };
  };

  Tropos.Alexa = Tropos.AlexaWithCallback;

  /**
   *
   */
  Tropos.AlexaWithPromise = function Alexa(originalHandler) {
    return async (event, context, cb) => {
      const originalResponse = await originalHandler(event, context, cb);
      this._send(event, originalResponse);
      return originalResponse;
    };
  };

  return Tropos;
};
