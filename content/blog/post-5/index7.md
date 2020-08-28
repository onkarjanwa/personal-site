---
title: How to update android target api level in React-Native
slug: how-to-update-android-target-api-level-in-React-Native
date: "2020-08-28T22:40:32.169Z"
description: Target api level defines app support for android version. We need to update target api level to support latest android version. For e.g. API level 29 is required for Android 10.
tags: ["Programming"]
---

## What this article includes:

- What is target api level in android?
- How to update target api level?
- References to learn more

## What is target api level in android?

Target api level defines app support for android version. We need to update target api level to support latest android version. For e.g. API level 29 is required for Android 10.

## How to update target api level?

We can update target api level in `build.gradle` present in `src/android`. We will need to update `targetSdkVersion`, `buildToolsVersion`, `compileSdkVersion` and `supportLibVersion`.

```js
buildToolsVersion = "28.0.3"
compileSdkVersion = 28
targetSdkVersion = 28
supportLibVersion = "28.0.0"

// How it will look when we change from target api level 28 to 29
buildToolsVersion = "29.0.3"
compileSdkVersion = 29
targetSdkVersion = 29
supportLibVersion = "29.0.0"
```

## References to learn more

- [https://developer.android.com/guide/topics/manifest/uses-sdk-element](https://developer.android.com/guide/topics/manifest/uses-sdk-element)


