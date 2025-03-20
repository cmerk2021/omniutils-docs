---
title: Configuration
description: Learn about OmniUtils' new configuration.
sidebar:
  # Uses the default variant matching your site’s accent color
  badge: New
---

Introducing our new config, providing debug capabilities and integrated error handling!

## Installation
To get started, import the new OmniUtils module from OmniUtils:
```javascript
import { OmniUtils } from "@connormerk/omniutils";
```
or, use CommonJS:
```javascript
const { OmniUtils } = require("@connormerk/omniutils");
```

## Definition
To define an OmniUtils config, you can use the provided `defineConfig` function:
```javascript
import { OmniUtils } from "@connormerk/omniutils";

OmniUtils.defineConfig({
    debug: false, // to get messages logged to the console about what is happening within OmniUtils
    errorCallback: (error) => {
        // You can use the provided error object to handle the error accordingly.
        // NOTE: OmniUtils' internal errors are not automatically handled by Node.js. You must define an errorCallback to handle these errors in your application.
        // Another NOTE: OmniUtils' logging WILL log an error to the console, but not provide any other handling.
    },
});
```
Currently, the `defineConfig` only supports the `debug` and `errorCallback` properties. More coming soon.