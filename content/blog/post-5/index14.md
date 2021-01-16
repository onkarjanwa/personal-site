---
title: RxJS - An Introduction to Subject
slug: rxjs-an-introduction-to-subject
date: "2021-01-16T22:40:32.169Z"
description: A Subject is a special type of Observable which is also an Observer. We can subscribe a Subject using `.subscribe` method and we can also push values using `.next` method.
tags: ["Programming", "JavaScript", "RxJS"]
---

## Table of contents

- What is a Subject?
- Types of Subject
  - BehaviorSubject
  - ReplaySubject
  - AsyncSubject

## What is a Subject?

A Subject is a special type of Observable which is also an Observer. We can subscribe a Subject using `.subscribe` method and we can also push values using `.next` method.

See basic example below:

```js
const {Subject} = require('rxjs');
const subject = new Subject();
subject.subscribe(console.log);
subject.next("Hello World");

// RESULT 👇

// Hello World
```

Like an observable a Subject can be subscribed multiple times.

```js
const {Subject} = require('rxjs');
const subject = new Subject();
subject.subscribe(console.log);
subject.subscribe(console.log);
subject.next("HHello World");

// RESULT 👇

// Hello World
```

Since a Subject is an Observer, this also means you may provide a Subject as the argument to the subscribe of any Observable.

See below example:

```js
const {Subject} = require('rxjs');
const subject = new Subject();
subject.subscribe(v => {
	console.log(v);
});

const observable = new Observable((subscriber) => {
	subscriber.next("Hello World");
	subscriber.complete();
});
observable.subscribe(subject);

// RESULT 👇

// Hello World
```

There are some special types of Subject:
1. BehaviorSubject
2. ReplaySubject
3. AsyncSubject

## BehaviorSubject

A BehaviorSubject represents always current value. If a property value changes over time, then this is useful to get latest value. Anytime a new subscriber subscribes a BehaviorSubject, it will get the current value as behaviorSubject automatically pushes the current value to observer.

A BehaviorSubject is created with default value as constructor argument.

```js
const {BehaviorSubject} = require('rxjs');
const behaviorSubject = new BehaviorSubject("Onkar");
behaviorSubject.subscribe((v) => {
    console.log(`My name is ${v}`);
});

// RESULT 👇

// My name is Onkar
```

If no value is provided, then default value is undefined.

```js
const {BehaviorSubject} = require('rxjs');
const behaviorSubject = new BehaviorSubject();
behaviorSubject.subscribe((v) => {
    console.log(`My name is ${v}`);
});

// RESULT 👇

// My name is undefined
```

Another cool example.

```js
const {BehaviorSubject} = require('rxjs');
const behaviorSubject = new BehaviorSubject("Onkar");
behaviorSubject.subscribe((v) => {
    console.log(`1: My name is ${v}`);
});

behaviorSubject.next("Onkar Janwa");

behaviorSubject.subscribe((v) => {
    console.log(`2: My name is ${v}`);
});

// RESULT 👇

// 1: My name is Onkar
// 1: My name is Onkar Janwa
// 2: My name is Onkar Janwa
```

## ReplaySubject

A ReplaySubject can provide n number of past value when a new subscriber subscribes a ReplaySubject.

A ReplaySubject is created with a count value as constructor argument. When count is 1, it behaves same as a BehaviorSubject.

```js
const {ReplaySubject} = require('rxjs');
const replySubject = new ReplaySubject(1);
replySubject.next("Onkar");
replySubject.subscribe((v) => {
    console.log(`My name is ${v}`);
});

// RESULT 👇

// My name is Onkar
```

Example with count more than 1. In below example second subscriber receives two push values (FIFO basis) when it is initiated as before initiation subject has called `.next` 2 times and count provided to ReplaySubject is also 2. See the printed result.

```js
const {ReplaySubject} = require('rxjs');
const replySubject = new ReplaySubject(2);
replySubject.next("Onkar");
replySubject.subscribe((v) => {
    console.log(`1: My name is ${v}`);
});

replySubject.next("Onkar Janwa");

replySubject.subscribe((v) => {
    console.log(`2: My name is ${v}`);
});

// RESULT 👇

// 1: My name is Onkar
// 1: My name is Onkar Janwa
// 2: My name is Onkar
// 2: My name is Onkar Janwa
```

## AsyncSubject

An observer receives last value only when a subject execution is completed in case of AsyncSubject. As you can see in the below example, output is printed only once and that is the last value. If we don't call `.complete()` on `asyncSubject`, then observer will not receive any value.

```js
const {AsyncSubject} = require('rxjs');
const asyncSubject = new AsyncSubject();
asyncSubject.next("OJ");
asyncSubject.subscribe(console.log);
asyncSubject.next("Onkar");
asyncSubject.next("Onkar Janwa");
asyncSubject.complete();

// RESULT 👇

// Onkar Janwa
```