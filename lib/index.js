
const axios = require('axios');
const axiosRetry = require('axios-retry');
const Alexa = require('./alexa');
const { isErrorRetryable } = require('./util');

/**
 *
 * @param {string} writeKey
 * @param {object} options
 */
module.exports = (writeKey, options = {}) => {
  const { retryCount = 3 } = options;

  axiosRetry(axios, {
    retries: retryCount,
    retryCondition: isErrorRetryable,
    retryDelay: axiosRetry.exponentialDelay,
  });

  function Tropos() {}

  Tropos.Alexa = new Alexa(writeKey, options);

  return Tropos;
};
