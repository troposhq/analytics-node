/* eslint-disable no-underscore-dangle */

const { assert } = require('chai');
const sinon = require('sinon');
const { Alexa } = require('../lib')('mykey', { url: 'https://yylnrdgwk5.execute-api.us-east-1.amazonaws.com/dev' });
const fixtures = require('./fixtures');

const originalCallbackHandler = (event, ctx, cb) => cb(null, fixtures.response);
const originalPromiseHandler = async () => fixtures.response;

describe('analytics-node', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('AlexaWithPromise', () => {
    it('should send request and response data', async () => {
      const cb = sinon.stub();
      sandbox.stub(Alexa, '_send');
      await Alexa.AlexaWithPromise(originalPromiseHandler)(fixtures.event, fixtures.context, cb);
      assert.isFalse(cb.called);
      assert.isTrue(Alexa._send.calledOnce);
      assert.isTrue(Alexa._send.calledWithExactly(fixtures.event, fixtures.response));
    });
  });

  describe('AlexaWithCallback', () => {
    it('should send request and response data', (done) => {
      sandbox.stub(Alexa, '_send');
      Alexa.AlexaWithCallback(originalCallbackHandler)(fixtures.event, fixtures.context, () => {
        assert.isTrue(Alexa._send.calledOnce);
        assert.isTrue(Alexa._send.calledWithExactly(fixtures.event, fixtures.response));
        done();
      });
    });
  });
});
