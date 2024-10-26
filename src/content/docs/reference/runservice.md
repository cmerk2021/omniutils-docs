---
title: Run Service
sidebar:
  # Uses the default variant matching your site’s accent color
  badge: New
---

The RunService module provides functions/properties revolving the JavaScript runtime.
(More coming soon)

## Installation
To install, import the module from OmniUtils.
```javascript
import { RunService } from '@connormerk/omniutils'
```

## Properties

### `RunService.environment`
The `environment` property provides information about the current runtime environment. It returns an object with the following properties:

* **type:** A string indicating the environment type, such as `browser`, `node`, `deno`, `web worker`, `electron`, `react-native`, `cordova`, or `unknown`.
* **userAgent:** (Browser/React Native/Cordova) The user-agent string of the browser.
* **isMobile:** (Browser/React Native/Cordova) A boolean indicating if the environment is mobile.
* **version:** (Node.js/Deno/Electron) The version of the runtime.
* **isNode:** (GlobalThis) A boolean indicating if the environment is Node.js.
