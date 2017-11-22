# clean-shortid

This uses the excellent [shortid](https://www.npmjs.com/package/shortid) module, and combines it with the [badwords-list](https://www.npmjs.com/package/badwords-list) modules in order to generate short ID values that, where possible, don't contain offensive terms.

## Installation

```
npm install clean-shortid
```

## Usage

Usage is exactly the same as [shortid](https://www.npmjs.com/package/shortid).

```
var cleanShortId = require('clean-shortid');

console.log(cleanShortId.generate());
// HJfBxwQxG
```
