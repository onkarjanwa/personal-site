---
title: Comparing Laravel and Yii2
slug: comparing-laravel-and-yii2
date: "2017-07-01T22:40:32.169Z"
description: Google trends and git hub stars shows Laravel is most popular PHP Framework of 2017 and 2018.
---

Google trends and git hub stars shows Laravel is most popular PHP Framework of 2017 and 2018. I went through some feature comparison between Laravel and Yii2, here are those comparisons:

## Routing Laravel

- Easy routing in Laravel
- Map a Closure to a route without using controller
- Separate file for routing config
- Http verb can be restricted in routing config

```php
Route::get(‘foo’, function () {
 return ‘Hello World’;
});
Route::get(‘/user’, ‘UserController@getUser’);
Route::post(‘/user’, ‘UserController@createUser’);
```

### Routing Yii2

- Little Complex
- Can’t map a Closure to a routing
- Part of main config file
- Http verb can be restricted in controller

```php
[
    echo Url::to(['user'])
]
```

### Session Laravel

- Provide an easy way to extend session and write own session service
- Out of box support for Memcached, Redis and mysql db session
- We cann't use php $_SESSION

```php
// $request is instance of Request class.
$request->session()->get('key');
$request->session()->put('key','value');
$request->session()->has('key');
```

### Session Yii2

- Provides extensions to support Memcached, Redis and mysql db session
- We can use php $_SESSIONinstead of Yii session.

```php
// Yii::$app->session is a component
Yii::$app->session->get('key');
Yii::$app->session->set('key','value');
Yii::$app->session->has('key');
```

#### Cache Laravel

- Provide an easy way to extend cache and write own cache service
- Out of box support for Memcached, Redis and mysql db cache
- Does not provide query caching and cache dependency

[Read complete post](https://medium.com/@onkarjanwa/comparing-laravel-and-yii2-f56e5b01a6c6)
