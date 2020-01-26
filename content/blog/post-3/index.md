---
title: Async/Await in Depth
slug: async-await-in-depth
date: "2019-04-20T22:40:32.169Z"
description: Async function was introduced in ES2017 with two new keywords async and await. The utility of async function is to execute asynchronous code in synchronous way and avoid callback hell.
---

## What this article includes:

- What is Async/Await
- Why Async/Await
- How to use Async/Await
- How to use Async/Await for browsers
- When Async/Await is a hell
- References to learn more

## What is Async/Await

Async function was introduced in ES2017 with two new keywords async and await. The utility of async function is to execute asynchronous code in synchronous way and avoid callback hell.

## Why Async/Await

Callback functions were used to get response of asynchronous code. Some examples of asynchronous code are Ajax request, db queries, DOM events, file operations etc. Writing callback is ok if we have one or two callback functions, if we have more then we will dive into callback hell.

```js
// simple callback example
var callback = function(response, status) {
    console.log('Executed after ajax response');
    console.log(response, status);
}
$.get('/some-url', callback);
console.log('Executed before ajax response');
```

```js
// callback hell
var dealWithFinalResponse = function(data) {
    console.log(data);
}

var callback3 = function(response3, status) {
    console.log('Final output we needed');
    dealWithFinalResponse(response3);
}

var callback2 = function(response2, status) {
    console.log('Executed after ajax response from second call');
    console.log(response2, status);
    $.get('/some-url-3?id='+response2.id, callback3);
}

var callback1 = function(response1, status) {
    console.log('Executed after ajax response from first call');
    console.log(response1, status);
    $.get('/some-url-3?id='+response1.id, callback2);
}

$.get('/some-url-1', callback1);
```

Promises are an alternative to callbacks. There are many other ways to write promises in more simpler way and less lines of code. Executing multiple promises in parallel is much simpler using Promise.all() but executing them in synchronous order is just a way i am showing in the below images.

```js
// Promise as alternative to callback hell
var dealWithFinalResponse = function(data) {
    console.log(data);
}

var promise1 = new Promise(function(resolve, reject) {
    $.get('/some-url-1', function(response){
        resolve(response);
    });
});

promise1.then(function(response1){

    var promise2 = new Promise(function(resolve, reject) {
        $.get('/some-url-2?id'+response1.id, function(response){
            console.log('Executed after ajax response from first call');
            resolve(response);
        });
    });

    promise2.then(function(response2){

        var promise3 = new Promise(function(resolve, reject) {
            $.get('/some-url-3?id'+response2.id, function(response){
                console.log('Executed after ajax response from second call');
                resolve(response);
            });
        });

        promise3.then(function(response3){
            console.log('Final output we needed');
            dealWithFinalResponse(response3);
        });

    });

});
```

So far we have seen what are callbacks and promises and after that we are sure to understand why do we need async function. So to run asynchronous code in synchronous way we need async function.

## How to use Async/Await

### Async

The word async before any function makes it an async function and it always returns a promise. So we can use .then to get return value and .catch to get thrown errors.

```js
// async function defination
async function fn() {
    return 'I am async function';
}

fn().then(function(response){
    console.log(response); // it prints 'I am async function'
});
```

So what if async function returns a promise?

```js
// async function returning promise
async function fn() {
    return new Promise(function(resolve, reject){
        resolve('I am async function');
    });
}

fn().then(function(response){
    console.log(response); // it prints 'I am async function'
});

async function fnError() {
    return new Promise(function(resolve, reject){
        resolve('I am async function error');
    });
}

fn().then(function(response){

}).catch(function(err) {
    console.log(err); // it prints 'I am async function error'
});
```

It behaves same as without promise.

What if we use try catch to catch error with async function?

```js
// async function error handling
async function fn() {
    throw new Error('Its error message');
}


try {
    fn().then(function(response){
        console.log(response);
    });
} catch(err){
    console.log(err);
};
```

If we don’t use .catch and an error is thrown from an async function, an UnhandledPromiseRejectionWarning will be thrown, so it’s always better to write .catch while calling async function.

### Await

The word await makes code synchronous, so when we use await before calling any function which returns promise the code will wait for promise to resolve than the next code line will get executed. Also await works with function which does not return promise but there is not needed.

But await is only valid inside an async function, otherwise it gives SyntaxError.

```js
function fn() {
}

var result = await fn();
// SyntaxError: await is only valid in async function
```

How to use await?

Just use await keyword before calling any function, await will wait for function to resolve promise and will return the result.

```js
function fn() {
    return new Promise(function(resolve, reject){
        resolve('await');
    });
}

async function fnWithAwait() {
    return await fn();
}

fnWithAwait().then(function(response){
    console.log(response); // it prints 'await'
});
```

What if function throws error called with await?

Try catch is used to handle error thrown inside a function called with await keyword.

```js
// Error handling with await
function fn() {
    throw new Error('Error: fn');
}

async function fnWithAwait() {
    try {
        return await fn();
    } catch(err) {
        throw new Error(err.message);
    }
}

fnWithAwait().then(function(response){
    console.log(response);
}).catch(function(err){
    console.log(err);
});
```

```js
// Error handling with await
function fn() {
    return new Promise(function(resolve, reject){
        reject('Error: fn');
    });
}

async function fnWithAwait() {
    try {
        return await fn();
    } catch(err) {
        throw new Error(err.message);
    }
}

fnWithAwait().then(function(response){
    console.log(response);
}).catch(function(err){
    console.log(err);
});
```

Can we use multiple await?

Yes, multiple await can be used in one async function. But multiple await comes with a cost because they execute in synchronous way which is not good for performance and opposite from nature of javascript.

```js
// Function with multiple await
async function fnWithMultipleAwait() {
    let result1 = await fn1();
    let result2 = await fn2();
    let result3 = await fn3();

    return {1: result1, 2: result2, 3: result3};
}
```

## How to use Async/Await for browsers

Async await can’t be used in all versions of browsers because some of the browsers do not support it. Node.js version 8 supports async await so we can use it there.

As of today IE does not support it while other latest browsers support. It can be checked here [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function).

So because of compatibility issues we can’t use directly in browsers. If we want to use async/await then we need to use transpilers which convert ES6 and above version code into ES5 which is supported by most of the browsers we use today.

## When Async/Await is a hell?

In the below example, performance of getUserDetailsV1 is lower than other two implementations. In Vanila js or Node.js using await in that will lead to low performance code. We get the most benefit of javascript because of asynchronous behaviour. Other two implementations are fine.

```js
// Low performance usage of await
async function getUserDetailsV1(userID) {
    var userBasicInfo = await users.getBasicInfo();
    var userPhotoUrl = await users.getPhotoUrl();
    var userRelatives = await users.getRelatives();
}

// Good performance usage of await
async function getUserDetailsV2(userID) {
    var userBasicInfoPromise = users.getBasicInfo();
    var userPhotoUrlPromise = users.getPhotoUrl();
    var userRelativesPromise = users.getRelatives();

    Promise.all([
        userBasicInfoPromise,
        userPhotoUrlPromise,
        userRelativesPromise,
    ]).then(function(result){
        console.log(result);
    });
}

// Good performance usage of await
async function getUserDetailsV3(userID) {
    var userBasicInfoPromise = users.getBasicInfo();
    var userPhotoUrlPromise = users.getPhotoUrl();
    var userRelativesPromise = users.getRelatives();

    var userBasicInfo = await userBasicInfoPromise;
    var userPhotoUrl = await userPhotoUrlPromise;
    var userRelatives = await userRelativesPromise;
}
```

## References to learn more

- [https://cmichel.io/how-is-async-await-transpiled-to-es5](https://cmichel.io/how-is-async-await-transpiled-to-es5)
- [https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them](https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them)
- [https://javascript.info/async-await](https://javascript.info/async-await)
- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
