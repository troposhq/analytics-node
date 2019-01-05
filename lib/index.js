/* eslint-disable no-underscore-dangle */

const axios = require('axios');
const axiosRetry = require('axios-retry');
const { isErrorRetryable } = require('./util');

/**
 *
 * @param {string} writeKey
 * @param {object} options
 */
function Tropos(writeKey, options = {}) {
  if (!(this instanceof Tropos)) { return new Tropos(writeKey, options); }
  if (!writeKey) throw new Error('writeKey is required to initialize Tropos Analytics');

  const { retryCount = 3, url } = options;
  this.writeKey = writeKey;
  this.url = url;
  this.axios = axios.create();

  axiosRetry(this.axios, {
    retries: retryCount,
    retryCondition: isErrorRetryable,
    retryDelay: axiosRetry.exponentialDelay,
  });
}

/**
 *
 */
Tropos.prototype._send = function _send(data) {
  const params = {
    method: 'POST',
    url: this.url,
    data,
    auth: {
      username: this.writeKey,
      password: '',
    },
  };
  this.axios(params)
    .catch(error => console.log(error));
};

/**
 *
 */
Tropos.prototype._wrappedCallback = function _wrappedCallback(callback) {
  return (err, originalResponse) => {
    this._send(originalResponse);
    callback(err, originalResponse);
  };
};

/**
 *
 */
Tropos.prototype.AlexaWithCallback = function Alexa(originalHandler) {
  return (event, context, callback) => {
    const wrappedCallback = this._wrappedCallback(callback);
    originalHandler(event, context, wrappedCallback);
  };
};

Tropos.prototype.Alexa = Tropos.prototype.AlexaWithCallback;

/**
 *
 */
Tropos.prototype.AlexaWithPromise = function Alexa(originalHandler) {
  return async (event, context) => {
    const originalResponse = await originalHandler(event, context);
    this._send(originalResponse);
    return originalResponse;
  };
};

module.exports = Tropos;
