/* eslint-disable no-underscore-dangle */
const axios = require('axios');

function Alexa(writeKey, options) {
  if (!(this instanceof Alexa)) return new Alexa(writeKey, options);

  this.writeKey = writeKey;
  this.url = options.url;
}

/**
 *
 */
Alexa.prototype._send = function _send(request, response) {
  const { writeKey, url } = this;

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
Alexa.prototype._wrappedCallback = function _wrappedCallback(event, callback) {
  return (err, originalResponse) => {
    this._send(event, originalResponse);
    callback(err, originalResponse);
  };
};

/**
 *
 */
Alexa.prototype.AlexaWithCallback = function AlexaWithCallback(originalHandler) {
  return (event, context, callback) => {
    const wrappedCallback = this._wrappedCallback(event, callback);
    originalHandler(event, context, wrappedCallback);
  };
};


Alexa.prototype.Alexa = Alexa.AlexaWithCallback;

/**
 *
 */
Alexa.prototype.AlexaWithPromise = function AlexaWithPromise(originalHandler) {
  return async (event, context, cb) => {
    const originalResponse = await originalHandler(event, context, cb);
    this._send(event, originalResponse);
    return originalResponse;
  };
};

module.exports = Alexa;
