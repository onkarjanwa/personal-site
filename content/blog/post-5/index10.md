---
title: Node.js fs module
slug: node-fs-module
date: "2020-09-02T22:40:32.169Z"
description: File system module is used to write and read a file. fs is part of node core modules.
tags: ["Programming", "JavaScript"]
---

## What this article includes:

- What is node fs module?
- What are the asynchronous functions?
- What are the synchronous functions?
- References to learn more

## What is node fs module?

`fs` stands for File System. File system module is used to write and read a file. `fs` is part of node core modules. `fs` module provides both synchronous and asynchronous functions for the behaviors like read file, write file, delete file.

## What are the asynchronous functions?

Ususally fs asynchronous functions always requires a callback function and it does not block further execution.

1. Unlink a file

```js
const fs = require('fs');
const callbackFun = (err) => {};
fs.unlink('/tmp/me.text', callbackFun);
```

2. Write a file

```js
const fs = require('fs');
const data = new Uint8Array(Buffer.from('Onkar'));
const callbackFun = (err) => {};
fs.writeFile('/tmp/me.text', data, callbackFun);
```

3. Read a file

```js
const fs = require('fs');
const callbackFun = (err, data) => {};
fs.readFile('/tmp/me.text', callbackFun);
```

## What are the synchronous functions?

Synchronous function will block further execution till the operation is completed and returns the output for the function.

1. Unlink a file

```js
const fs = require('fs');
fs.unlinkSync('/tmp/me.png');
```

2. Write a file

```js
const fs = require('fs');
const data = new Uint8Array(Buffer.from('Onkar'));
fs.writeFileSync('/tmp/me.text', data);
```

3. Read a file

```js
const fs = require('fs');
const data = fs.readFileSync('/tmp/me.text');
```

## References to learn more

- [https://nodejs.org/api/fs.html](https://nodejs.org/api/fs.html)
