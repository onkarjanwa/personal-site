---
title: How to define REST API for bulk operation
slug: how-to-define-rest-api-for-bulk-operation
date: "2020-08-31T22:40:32.169Z"
description: REST is a standard way of writing web services. It defines a set of constraints which are used in defining request url, request query params, request body params and response.
tags: ["Programming", "REST"]
---

## What this article includes:

- What is REST API?
- How to define REST API for bulk operation?
- References to learn more

## What is REST API?

REST is a standard way of writing web services. It defines a set of constraints which are used in defining request url, request query params, request body params and response. Web service APIs that adhere to the REST architectural constraints are called RESTful APIs.

## How to define REST API for bulk operation?

Operation in which we want to create or update or delete multiple resource together, called bulk operation. I have seen practices where people use `bulk` at the end of the url to define bulk operation. But I think that is not a good REST practice.

I am adding examples of bulk operations on tasks api.

1. Create multiple tasks

We can create multiple records using providing input in an array form where each record is an object of the resource with required inputs. The response of such api will contain all the records created and errors in creating records.

```js
API: POST /api/tasks
Body: [resource1, resource2]
```

2. Update multiple tasks

We can provide filter in the url and then update all the records filtered by provided filter. Filter works similar to a GET query.

```js
API: PATCH /api/tasks?filter
Body: {
    status: 'completed'
}
```

3. Delete multiple tasks

We can provide filter in the url and then delete all the resources filtered by provided filter. Filter works similar to a GET query.

```js
API: DELETE /api/tasks?filter
```

## References to learn more

- [https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md)
- [https://github.com/paypal/api-standards/blob/master/api-style-guide.md](https://github.com/paypal/api-standards/blob/master/api-style-guide.md)
- [https://phauer.com/2015/restful-api-design-best-practices/](https://phauer.com/2015/restful-api-design-best-practices/)
- [https://www.odata.org/](https://www.odata.org/)


