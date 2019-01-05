exports.event = {
  version: '1.0',
  session:
  {
    new: false,
    sessionId: 'amzn1.echo-api.session.5407c66b-eeda-4f65-88f9-1471859bc09f',
    application:
      { applicationId: 'amzn1.ask.skill.591b90da-56e7-4255-8526-e1d643410679' },
    user:
      { userId: 'amzn1.ask.account.AFWBOUC244UHW3OD5UIPVSQEBUXB3YYY4HQEHLLFISRRRNCIFZRGMHGT24S4IFOPCEWYHYUTAFLJKPK4CTLV7KQZWUMY75L4TU53ENAZNYXSJFYTH4NVQQT2B2XKSP6UCCGAAOAHZSSHKJ47B7NQTQRD45HVC2KTTGK3DHXPNEE3B5BHHCKROWOYMV3NUB4GKTK7CTPA3MTQ5FI' },
  },
  context:
  {
    System:
    {
      application: {},
      user: {
        userId: 'amzn1.ask.account.AFWBOUC244UHW3OD5UIPVSQEBUXB3YYY4HQEHLLFISRRRNCIFZRGMHGT24S4IFOPCEWYHYUTAFLJKPK4CTLV7KQZWUMY75L4TU53ENAZNYXSJFYTH4NVQQT2B2XKSP6UCCGAAOAHZSSHKJ47B7NQTQRD45HVC2KTTGK3DHXPNEE3B5BHHCKROWOYMV3NUB4GKTK7CTPA3MTQ5FI',
      },
      device: {},
      apiEndpoint: 'https://api.amazonalexa.com',
      apiAccessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ.eyJhdWQiOiJodHRwczovL2FwaS5hbWF6b25hbGV4YS5jb20iLCJpc3MiOiJBbGV4YVNraWxsS2l0Iiwic3ViIjoiYW16bjEuYXNrLnNraWxsLjU5MWI5MGRhLTU2ZTctNDI1NS04NTI2LWUxZDY0MzQxMDY3OSIsImV4cCI6MTU0NjQ4MjE3MywiaWF0IjoxNTQ2NDc4NTczLCJuYmYiOjE1NDY0Nzg1NzMsInByaXZhdGVDbGFpbXMiOnsiY29uc2VudFRva2VuIjpudWxsLCJkZXZpY2VJZCI6ImFtem4xLmFzay5kZXZpY2UuQUdJWFdRN09LVzJDQVU0VU1JNzM3QktVWlBWQVlRNUZPUjJNSjRJUUY2SFZOVzJIV1dPNFNUREZTV0tGTVlRMjRZRlRFRVpBQVNSQ0lLTkJOTkZCWklITktZTTI3TTJMRDczSEJCR01EUTNNSDI3M0FSM1ZZRTczN0NJVVNGTjU3Qzc0M0lNUjNQSEM0T1RFUFcyUVVINk5aQUg2Q05TR0FCVTQ0M0w2NjVBMks0R0xPVDU2WSIsInVzZXJJZCI6ImFtem4xLmFzay5hY2NvdW50LkFGV0JPVUMyNDRVSFczT0Q1VUlQVlNRRUJVWEIzWVlZNEhRRUhMTEZJU1JSUk5DSUZaUkdNSEdUMjRTNElGT1BDRVdZSFlVVEFGTEpLUEs0Q1RMVjdLUVpXVU1ZNzVMNFRVNTNFTkFaTllYU0pGWVRINE5WUVFUMkIyWEtTUDZVQ0NHQUFPQUhaU1NIS0o0N0I3TlFUUVJENDVIVkMyS1RUR0szREhYUE5FRTNCNUJISENLUk9XT1lNVjNOVUI0R0tUSzdDVFBBM01UUTVGSSJ9fQ.NzaWjtCeKl7rVjlArnMnElwBdZuKXvjCX77A7Ec7CjeRagU_lWPSEc0QV5vYYfbSu3Adz75fGpX02X-YarE4p4ml9NY1Yr8yXxLMHnFnGYZDh7Co8F5NvBuxLz0sW0keSGYDW__HW7c2_a9agrLrf624H8GShemwzOLVT7yAUnVoRML3TtkcPWqI8fQby56l5FqpH6PJwal_bz3kM6KjlMzg9guOlpgP156fm8LPUrqwgd_J71rYyV5U7_p3txefU4oC8c9I64mr4xKP0_Ol3I18JAjzP4qJUZhG2d0qH5-ETtQVXmA-TpmprUub1MB-6GLIcgOQ44TJMSDC6r0mCw',
    },
  },
  request:
  {
    type: 'IntentRequest',
    requestId: 'amzn1.echo-api.request.18f42c8a-9ccb-412f-a3a8-618b0d2e142f',
    timestamp: '2019-01-03T01:22:53Z',
    locale: 'en-US',
    intent: { name: 'HelloWorldIntent', confirmationStatus: 'NONE' },
  },
};

exports.context = {
  callbackWaitsForEmptyEventLoop: false,
  done: () => { },
  succeed: () => { },
  fail: () => { },
  logGroupName: '/aws/lambda/ask-custom-test-skill-default',
  logStreamName: '2019/01/03/[$LATEST]80caad0caac543ff9adab8d165940397',
  functionName: 'ask-custom-test-skill-default',
  memoryLimitInMB: '128',
  functionVersion: '$LATEST',
  getRemainingTimeInMillis: () => { },
  invokeid: '17a34386-0ef6-11e9-aa83-57769004560a',
  awsRequestId: '17a34386-0ef6-11e9-aa83-57769004560a',
  invokedFunctionArn: 'arn:aws:lambda:us-east-1:433463207427:function:ask-custom-test-skill-default',
};

exports.response = {
  version: 'string',
  sessionAttributes: {
    key: 'value',
  },
  response: {
    outputSpeech: {
      type: 'PlainText',
      text: 'Plain text string to speak',
      ssml: '<speak>SSML text string to speak</speak>',
      playBehavior: 'REPLACE_ENQUEUED',
    },
    card: {
      type: 'Standard',
      title: 'Title of the card',
      content: 'Content of a simple card',
      text: 'Text content for a standard card',
      image: {
        smallImageUrl: 'https://url-to-small-card-image...',
        largeImageUrl: 'https://url-to-large-card-image...',
      },
    },
    reprompt: {
      outputSpeech: {
        type: 'PlainText',
        text: 'Plain text string to speak',
        ssml: '<speak>SSML text string to speak</speak>',
        playBehavior: 'REPLACE_ENQUEUED',
      },
    },
    directives: [
      {
        type: 'InterfaceName.Directive',
      },
    ],
    shouldEndSession: true,
  },
};
