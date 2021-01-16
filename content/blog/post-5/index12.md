---
title: RxJS - Observable, Observer and Subscriber Introduction
slug: rxjs-observable-observer-and-subscription-introduction
date: "2021-01-12T22:40:32.169Z"
description: Introduction to reactive javascript programming concepts like Observable, Observer and Subscriber.
tags: ["Programming", "JavaScript", "RxJS"]
---

## Table of contents

- What is a RxJS?
- What is an Observable?
- What is an Observer?
- What is a Subscriber?
- Observable examples
- Synchronous and Asynchronous behavior

## What is a RxJS?

RxJS is a reactive programming tool for javascript. This combines asynchronous and event-based programs by using observable sequences. This is the best tool for managing sequences of events in javascript. Core concepts of RxJS are Observable, Observer, Subscription, Operators, Subject and Schedulers.

## What is an Observable?

An observable is based on [Observer design pattern](https://en.wikipedia.org/wiki/Observer_pattern).

An observable does rely on a subscriber and an observer. A subscriber push values or errors and notifies observer about completion of execution. An subscriber receives values or errors and a completion notification and then can act on them. An observable can have more than one subscribers.

Basic example of an Observable creation:
```js
const observable = new Observable((subscriber) => {});

observable.subscribe(observer1);
observable.subscribe(observer2);
// can be added more
```

## What is an Observer?

An Observer is simply a consumer of values sent by a subscriber; It is an object with three callback functions `next`, `error`, `complete`.

Basic example of an Observer object:
```js
const Observer = {
    next: (value) => {}, // values are received by next callback.
    error (error) => {}, // error is received by error callback.
    complete () => {}, // completion notification is received by complete callback.
};
```

An Observer is passed to subscribe method of an observable object. Also we can add n number of subscriber.

```js
const observable = new Observable((subscriber) => {});

observable.subscribe(observer1);
observable.subscribe(observer2);
```

An observer functions can be defined without an object. 👇

```js
observable.subscribe(nextFn, errorFn, completeFn);
```

## What is a Subscriber?

A subscriber is an argument of an Observable constructor and this is responsible for sending values / error back to observer or notifying for completion. A subscriber can next, error or completion method.

```js
(new Observable((subscriber) => {
    subscriber.next('hello world');
    subscriber.error(new Error('Something is wrong'));
    subscriber.complete();
}));
```

Note that a subscriber can call `next` method multiple times but calling `next` or `error` after `complete` does not do anything.

A subscriber and an observer have same properties like `next`, `error` and `complete` but one does the job of receiving values and one does the job of sending values.

## Observable examples

1. File upload progress

```js
const uploadFileFn = function (File) {
    return new Observable((subscriber) => {
        // actual logic to determine file upload percentage
        subscriber.next(10);
        subscriber.next(50);
        subscriber.next(100);
        subscriber.complete();
    });
}
```

```js
uploadFileFn(file).subscribe({
    next: (uploadPercentage) => {
        // print upload file percentage or show progress
    },
    complete: () => {
        // hide progress and show success message
    },
});
```

2. Observing user movement

```js
const userMovement = function () {
    return new Observable((subscriber) => {
        navigator.geolocation.watchPosition((position) => {
            subscriber.next(position);
        });
    });
}
```

```js
userMovement().subscribe({
    next: (position) => {
        // show user movement
    },
});
```

## Synchronous and Asynchronous behavior

In case of synchronous behavior it works a like a normal function. Every time we call `.subscribe`, it executes the function immediately. See below example and check the output.

```js
const rxjs = require('rxjs');

const uploadFileFn = function (File) {
    return new rxjs.Observable((subscriber) => {
        // actual logic to determine file upload percentage
        subscriber.next(10);
        subscriber.next(50);
        subscriber.next(100);
        subscriber.complete();
    });
};

const uploadFile = uploadFileFn();
uploadFile.subscribe({
    next: (uploadPercentage) => {
        // print upload file percentage or show progress
        console.log(`subscribe 1 - upload progress - ${uploadPercentage}`);
    },
    complete: () => {
        // hide progress and show success message
        console.log('subscribe 1 - upload completed');
    },
});

uploadFile.subscribe({
    next: (uploadPercentage) => {
        // print upload file percentage or show progress
        console.log(`subscribe 2 - upload progress - ${uploadPercentage}`);
    },
    complete: () => {
        // hide progress and show success message
        console.log('subscribe 2 - upload completed');
    },
});

// RESULT 👇

// subscribe 1 - upload progress - 10
// subscribe 1 - upload progress - 50
// subscribe 1 - upload progress - 100
// subscribe 1 - upload completed
// subscribe 2 - upload progress - 10
// subscribe 2 - upload progress - 50
// subscribe 2 - upload progress - 100
// subscribe 2 - upload completed
```

See the same above example in asynchronous behavior.

```js
const rxjs = require('rxjs');

const uploadFileFn = function (File) {
    return new rxjs.Observable((subscriber) => {
        // actual logic to determine file upload percentage
        let i = 1;
        const intervalId = setInterval(() => {
            if (i === 1) {
                subscriber.next(10);
            }

            if (i === 2) {
                subscriber.next(50);
            }

            if (i === 3) {
                subscriber.next(100);
            }

            if (i === 4) {
                subscriber.complete();
                clearInterval(intervalId);
            }

            i++;
        }, 100);
    });
};

const uploadFile = uploadFileFn();
uploadFile.subscribe({
    next: (uploadPercentage) => {
        // print upload file percentage or show progress
        console.log(`subscribe 1 - upload progress - ${uploadPercentage}`);
    },
    complete: () => {
        // hide progress and show success message
        console.log('subscribe 1 - upload completed');
    },
});

uploadFile.subscribe({
    next: (uploadPercentage) => {
        // print upload file percentage or show progress
        console.log(`subscribe 2 - upload progress - ${uploadPercentage}`);
    },
    complete: () => {
        // hide progress and show success message
        console.log('subscribe 2 - upload completed');
    },
});

// RESULT 👇

// subscribe 1 - upload progress - 10
// subscribe 2 - upload progress - 10
// subscribe 1 - upload progress - 50
// subscribe 2 - upload progress - 50
// subscribe 1 - upload progress - 100
// subscribe 2 - upload progress - 100
// subscribe 1 - upload completed
// subscribe 2 - upload completed
```

## Read More on RxJS
1. [RxJS - Rewriting setInterval using observable](/xjs-rewriting-set-interval-using-observable).
2. [RxJS - An Introduction to Subject](/rxjs-an-introduction-to-subject).

There is more to RxJS, we can use with JavaScript Events as well. You will see them in the very next article.
