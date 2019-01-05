/* eslint-disable no-underscore-dangle */

const { assert } = require('chai');
const sinon = require('sinon');
const Tropos = require('../lib')('mykey', { url: 'https://yylnrdgwk5.execute-api.us-east-1.amazonaws.com/dev' });
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
      sandbox.stub(Tropos, '_send');
      await Tropos.AlexaWithPromise(originalPromiseHandler)(fixtures.event, fixtures.context, cb);
      assert.isFalse(cb.called);
      assert.isTrue(Tropos._send.calledOnce);
      assert.isTrue(Tropos._send.calledWithExactly(fixtures.event, fixtures.response));
    });
  });

  describe('AlexaWithCallback', () => {
    it('should send request and response data', (done) => {
      sandbox.stub(Tropos, '_send');
      Tropos.AlexaWithCallback(originalCallbackHandler)(fixtures.event, fixtures.context, () => {
        assert.isTrue(Tropos._send.calledOnce);
        assert.isTrue(Tropos._send.calledWithExactly(fixtures.event, fixtures.response));
        done();
      });
    });
  });
});
