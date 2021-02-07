---
title: How to implement Remote Procedure Call (RPC) with Rabbitmq
slug: how-to-implement-remote-procedure-call-with-rabbitmq
date: "2021-02-07T22:40:32.169Z"
description: Remote Procedure Call (RPC) is better alternative to REST Api when we want to implement communication between internal servers.
tags: ["Programming", "Rabbitmq", "JavaScript", "TypeScript"]
---


## Table of contents

- What is a Remote Procedure Call (RPC)?
- What is Rabbitmq?
- What is "Direct Reply-to" in Rabbitmq?
- How Remote Procedure Call (RPC) works?
- When and Why RPC?

## What is a Remote Procedure Call (RPC)?

RPC is a request–response protocol. A remote procedure call (RPC) is an inter-process communication technique that is used for client-server based applications. It is also known as a subroutine call or a function call.

A client has a request message that the RPC translates and sends to the server. When the server receives the request, it sends the required response back to the client. The client will be waiting while the server is processing the call and only resumed execution after the server is finished. From the top it looks like a function call.

There are many types of RPC implementations but in this article we will be learning  about how we can implement RPC through Rabbitmq using TypeScript/JavaScript.

## What is Rabbitmq?

Rabbitmq is an open source message broker based on amqp protocol. It has been used widely as Rabbitmq has integrations in most of the programming languages.

## What is "Direct Reply-to" in Rabbitmq?

In Rabbitmq we can specify on which queue server needs to send response And client needs to consume a special queue name `amq.rabbitmq.reply-to` in no-ack mode. If you consume the queue without no-ack mode, it will just fail.

When implementing RPC we use this property to tell RPC server where to send response. And RPC client will receive response on that queue. That's how the RPC is implemented.

## How Remote Procedure Call (RPC) works?

Please check the architecture explained in below image.

![Remote Procedure Call (RPC)](https://www.rabbitmq.com/img/tutorials/python-six.png)

To implement RPC using Rabbitmq, we need to define two queues. 1. Request queue and 2. Response queue. RPC server consumers request queue and will receive messages on the same while RPC client sends message on request queue only. While sending message to RPC Server, Client also send `reply-to` which is response queue name. RPC Client consumes that queue where RPC Server will send response. RPC Server will look for `reply-to` in message properties and will send response on that after executing  the respective operation.


We also use a special `correlation_id` message property, which is unique to the message. `correlation_id` is used to verify that we have received response to the specific request.

I have made it very easy and created an npm plugin [remote-procedure-call-rabbitmq
](https://www.npmjs.com/package/remote-procedure-call-rabbitmq). Please check it out if you would like to use it in any of your project.

To implement RPC first you will need to install rabbitmq. You can use below docker command to install it.
`docker run -p 5672:5672 rabbitmq:3`.

Now you need to install npm plugin `npm install remote-procedure-call-rabbitmq`.

Now Create RPC Server, please check below sample code.
```js
import * as amqp from 'amqplib';
import {RPCServer} from 'remote-procedure-call-rabbitmq';

function serviceFn(data: any): Promise<any> {
    console.log('serviceFn called')
    return new Promise((resolve, reject) => {
        resolve(data);
    });
}

const rpcServer = new RPCServer(amqp, {
    hostname: '127.0.0.1',
    port: 5672,
    username: 'guest',
    password: 'guest',
});
rpcServer.setDebug(true);
rpcServer.start().then(() => {
    rpcServer.provide('test', serviceFn);
}).catch(error => {
    console.log(error);
});
```

Now Create RPC Client, please check below sample code.
```js
import * as amqp from 'amqplib';
import {RPCClient} from 'remote-procedure-call-rabbitmq';

const rpcClient = new RPCClient(amqp, {
    hostname: '127.0.0.1',
    port: 5672,
    username: 'guest',
    password: 'guest',
});
rpcClient.setDebug(true);
rpcClient.start().then(() => {
    rpcClient.call('test', {id: 1}).then(console.log).catch(console.log);
});
```

Run RPC Server and RPC client to verify the communication. Using `rpcServer.provide` method you can expose as many services as you want and using `rpcClient.call` you can call server method as many times as you want.

## When and Why RPC?

RPC is not an alternative to REST API. Rest api has its own benefits and use cases. RPC is beneficial when we want to performance some inter-process communications. RPC has better performance over Rest API. RPC should not be used to expose functions to external clients, REST is best for that purpose.

##  Links
1. NPM Plugin [remote-procedure-call-rabbitmq
](https://www.npmjs.com/package/remote-procedure-call-rabbitmq)
1. Github Repo: [https://github.com/onkarjanwa/rabbitmq-rpc](https://github.com/onkarjanwa/rabbitmq-rpc)

Please use this in any of your work and report any issues [here](https://github.com/onkarjanwa/rabbitmq-rpc/issues) if you find.

Thank you reading my article!

