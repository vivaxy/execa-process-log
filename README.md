# execa-process-log

Initialized by [vivaxy/gt-npm-package](https://github.com/vivaxy/gt-npm-package)

## USAGE

`yarn add @vivaxy/execa-process-log`

```js
const execaProcessLog = require('@vivaxy/execa-process-log');
// ...
// output log to process while running npm publish
(async function() {
    await execaProcessLog('npm', ['publish']);
})()
// ...
```
