/* eslint-disable no-underscore-dangle */
const axios = require('axios');
const axiosRetry = require('axios-retry');
const { isErrorRetryable } = require('./util');

class Base {
  constructor(writeKey, options) {
    const { retryCount, url } = options;

    this.writeKey = writeKey;
    this.url = url;

    axiosRetry(axios, {
      retries: retryCount,
      retryCondition: isErrorRetryable,
      retryDelay: axiosRetry.exponentialDelay,
    });
  }

  _send(data) {
    const { writeKey, url } = this;

    const params = {
      method: 'POST',
      url,
      data,
      auth: {
        username: writeKey,
        password: '',
      },
    };
    axios(params).catch(error => console.log(error));
  }
}

module.exports = Base;
