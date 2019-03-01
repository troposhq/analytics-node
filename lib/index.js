const Alexa = require('./alexa');
const MicrosoftBotService = require('./microsoft-bot-service');

/**
 *
 * @param {string} writeKey
 * @param {object} options
 */
module.exports = (writeKey, options = {}) => {
  const Tropos = {};

  Tropos.Alexa = new Alexa(writeKey, options);
  Tropos.Microsoft = new MicrosoftBotService(writeKey, options);

  return Tropos;
};
