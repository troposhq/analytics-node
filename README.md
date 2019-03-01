# @tropos/analytics-node

A Node.js client for [Tropos](http://troposhq.com) — The easiest way to integrate analytics into any Alexa skill powered by Node.js.

## Installation

```bash
$ npm install @tropos/analytics-node
```


## Usage

```javascript
const Alexa = require('ask-sdk-core');
const tropos = require('@tropos/analytics-node')('write key');

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = tropos.Alexa(skillBuilder
  .addRequestHandlers(
    ...
  )
  .lambda());
```


## License

Copyright &copy; 2018 Tropos Inc. \<company@troposhq.com\>