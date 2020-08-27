---
title: Tabular data using console.table in JavaScript
slug: tabular-data-using-console.table-in-JavaScript
date: "2020-08-27T22:40:32.169Z"
description: Arrow functions was an addition with ES6 and are a syntactical alternative to regular functions. They are a shorter version of function defination.
tags: ["Programming"]
---

## What this article includes:

- What is console.table?
- How to use console.table?
- References to learn more

## What is console.table?

`console.table` is a javascript method available on `console` object to display tabular data as a table. Console object provides access to the browser's debugging console. We can print data on terminal when using with node.js.

## How to use console.table?

console.table takes one argument data as input and prints data in tabular format. data can be array or array of objects.

```js
console.table(["apple", "orange", "banana"]);

// Output => below table will be display on browser console or terminal
(index)    Values
0          apple
1          orange
2          banana
```

When using array of objects as data, column header is used from object keys.
```js
console.table([{
    fruit: "apples",
}, {
    fruit: "oranges",
}, {
    fruit: "bananas",
}]);

// Output => below table will be display on browser console or terminal
(index)    fruit
0          apples
1          oranges
2          bananas
```

When using array of objects as data, we can restrict column display. console.table support second argument where we can provide columns to show. In below example count field from objects will not display as that argument key is not provided in second argument.
```js
console.table([{
    fruit: "apples",
    count: 1,
}, {
    fruit: "oranges",
    count: 2,
}, {
    fruit: "bananas",
    count: 3,
}], ['fruit']);

// Output => below table will be display on browser console or terminal
(index)    fruit
0          apples
1          oranges
2          bananas
```

## References to learn more

- [https://developer.mozilla.org/en-US/docs/Web/API/Console/table](https://developer.mozilla.org/en-US/docs/Web/API/Console/table)


