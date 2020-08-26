---
title: ES6 Arrow Functions
slug: es6-arrow-functions
date: "2020-08-26T22:40:32.169Z"
description: Arrow functions was an addition with ES6 and are a syntactical alternative to regular functions. They are a shorter version of function defination.
tags: ["Programming"]
---

## What this article includes:

- What is an arrow function?
- When to not use an arrow function?
- References to learn more

## What is an arrow function?

Arrow functions was an addition with ES6 and are a syntactical alternative to regular functions. They are a shorter version of function defination.

```js
// traditional function defination
function calculateArea(height, width) {
    return height * width;
}

// arrow function
(height, width) => height * width;
```

Multiple syntax for defining arrow functions.

```js
// syntax 1
(height, width) => height * width;

// syntax 2
(height, width) => { height * width };

// syntax 3
(height, width) => {
    return height * width;
}

// when having one argument, we can define without brackets
height => height;
```

See how we can convert array map callback function into an arrow function.
```js
// Array map with traditional callback
[{id: 1}, {id: 2}].map(function(record) {
    return record.id;
});

// Array map with call back defined using array function
[{id: 1}, {id: 2}].map(record => record.id);
```

## When to not use an arrow function?

Arrow functions do not bind with `this`, `arguments`, `super`, and `new.target` keywords. Arrow function does not work as a constructor and  will throw an error when used with `new`. Also arrow function does not have `prototype` property.

```js
const person = {
    name: 'John',
    getName: function() {
        return this.name;
    }
}
person.getName(); // John

// run in browser
const person = {
    name: 'John',
    getName: () => this.name,
}
person.getName(); // ""

// Node.js
const person = {
    name: 'John',
    getName: () => this.name,
}
person.getName(); // undefined
```

## References to learn more

- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)


