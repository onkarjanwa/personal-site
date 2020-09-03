---
title: Template Literals in JavaScript
slug: Template-Literals-in-JavaScript
date: "2020-09-03T22:40:32.169Z"
description: Template literals are string literals allowing embedded expressions. They allow multiple strings and string interpolation. They are also called Template strings.
tags: ["Programming", "JavaScript"]
---

## What this article includes:

- What is template literals?
- What is template literals syntax?
- References to learn more

## What is template literals?

Template literals are string literals allowing embedded expressions. They allow multiple strings and string interpolation. They are also called Template strings.

## What is template literals syntax?

Template literals are enclosed by the backtick (\` \`) (grave accent) character instead of double or single quotes. Template literals can contain placeholders and without placeholder template literals are same as a sentence if it does not contain multiple lines.

Placeholder is represented like `${expression}` where the expression is replaced by the actual value.

Template literals examples:

```js
`Hello Onkar`

`Hello Onkar,
 How are you?`

`Hello ${name}, How are you?`
```

How placeholders will be replaced by actual value:
```js
const name = 'Onkar';
console.log(`Hello ${name}, How are you?`)
// Hello Onkar, How are you?
```

Expression can be any standard javascript expression.

```js
const salary = 1000;
const freelanceIncome = 500;
console.log(`Your total income = $${salary + freelanceIncome}`)
// Your total income = $1500
```

## References to learn more

- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
