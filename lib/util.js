const axiosRetry = require('axios-retry');

exports.isErrorRetryable = function isErrorRetryable(error) {
  // Retry Network Errors.
  if (axiosRetry.isNetworkError(error)) {
    return true;
  }

  if (!error.response) {
    // Cannot determine if the request can be retried
    return false;
  }

  // Retry Server Errors (5xx).
  if (error.response.status >= 500 && error.response.status <= 599) {
    return true;
  }

  // Retry if rate limited.
  if (error.response.status === 429) {
    return true;
  }

  return false;
};
