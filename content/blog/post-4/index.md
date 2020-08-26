---
title: Event Emitter in Node.js
slug: event-emitter-in-node.js
date: "2020-08-25T22:40:32.169Z"
description: Emitter emits an event and subscribers/handlers can listen to the event and perform some actions. We can add event subscribers from anywhere in the application same as we can emit event from anywhere in the application.
tags: ["Programming"]
---

## What this article includes:

- What is the Event Emitter?
- How to implement Event Emitter?
- What is EventEmitter2?
- References to learn more

## What is the Event Emitter?

Emitter emits an event and subscribers/handlers can listen to the event and perform some actions. We can add event subscribers from anywhere in the application same as we can emit event from anywhere in the application. Emitter can emit event with data which can used by listeners and using the data listener can perform actions. Node.js core is based on event-driven architecure.

## How to implement Event Emitter?

Node.js core library events is used as Event Emitter.

```js
const EventEmitter = require('events');
```

### How to emit an event?

Event is emitted using emit method. We can emit same event from multiple places. For e.g. we are emitted an event when account is created.

```js
const eventEmitter = new EventEmitter();
eventEmitter.emit('account_created');
```

### How to add event handlers?

Event handlers are functions which are added using eventEmitter.on method. We can add as many handlers as we want.

```js
eventEmitter.on('account_created', () => {
    // perform your action A
});
eventEmitter.on('account_created', () => {
    // perform your action B
});
```

### How to emit event with data and use them in handlers?

Second argument of eventEmitter.emit method is used pass data with event. Same way handler argument is data which is emitted from eventEmitter.emit method.

```js
// Emit event
eventEmitter.emit('account_created', {
    account_id: 1,
    email: 'test@example.com',
    created_at: '2020-01-01',
});

// Add event handlers
eventEmitter.on('account_created', (data) => {
    // send email
});
eventEmitter.on('account_created', (data) => {
    // log account creation
});
```

## What is EventEmitter2?

EventEmitter2 is an implementation of the EventEmitter module found in Node.js. In addition to having a better benchmark performance than EventEmitter and being browser-compatible, it also extends the interface of EventEmitter with many additional non-breaking features. See here for more details [https://github.com/EventEmitter2/EventEmitter2](https://github.com/EventEmitter2/EventEmitter2).

## References to learn more

- [https://nodejs.org/api/events.html](https://nodejs.org/api/events.html#events_events)
- [https://github.com/EventEmitter2/EventEmitter2](https://github.com/EventEmitter2/EventEmitter2)


