---
title: Get Started
description: Learn how to import OmniUtils
---
![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)

We offer two different ways to import OmniUtils.

## Via NPM
You can install OmniUtils via NPM by running the following command:
```bash
npm install @connormerk/omniutils
```
You can then import OmniUtils modules. For example, if you wanted to import the `stringUtils` module:
```javascript
import { stringUtils } from '@connormerk/omniutils'
```

## Via CDN
Alternatively, if you don't use `npm`, you can import OmniUtils via CDN:
```javascript
import { stringUtils } from 'https://cdn.jsdelivr.net/npm/@connormerk/omniutils@latest/index.js/+esm';
```
> Note: Some older browsers might not support dynamically bundled modules. If you are having issues, try this instead:
```javascript
import { stringUtils } from 'https://cdn.jsdelivr.net/npm/@connormerk/omniutils@latest/index.js'
```

That's it! You can continue by reading the documentation for each module.