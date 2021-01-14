---
title: RxJS - Rewriting setInterval using observable
slug: rxjs-rewriting-set-interval-using-observable
date: "2021-01-14T22:40:32.169Z"
description: A small post on how we can rewrite setInterval using observable.
tags: ["Programming", "JavaScript", "RxJS"]
---

## A small post on how we can rewrite setInterval using observable.

setInterval Example:

```js
const intervalId = setInterval(() => console.log("Running setInterval"), 100);
setTimeout(() => clearInterval(intervalId), 1000);
```

setInterval example using observable:

```js
const {interval} = require('rxjs');

const intervalObservable = interval(100);
const subscription = intervalObservable.subscribe(() => console.log("Running setInterval"));
setTimeout(() => subscription.unsubscribe(), 1000);
```