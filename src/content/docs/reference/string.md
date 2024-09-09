---
title: String Utils
description: Documentation for the String Utils OmniUtils module.
---

The `stringUtils` module provides functions for manipulating strings.

## Installation
To install, you can import the module from OmniUtils

```javascript
import { stringUtils } from '@connormerk/omniutils'
```

## Functions

### `stringUtils.capitalize(text)`
Capitalizes the first letter of a string.

**Return value:** The input string with the first letter capitalized

### `stringUtils.decapitalize(text)`
Decapitalizes the first letter of a string.

**Return value:** The input string with the first letter decapitalized

### `stringUtils.reverse(text)`
Reverses the letters in the input string.

**Return Value:** The input string with the letters reversed

### `stringUtils.truncate(text)`
Truncates a string to a specified length and adds an ellipsis.

**Return value:** The truncated string.

### `stringUtils.slugify(text)`
Converts a string to a URL-friendly slug.

**Return value:** URL-Friendly slug

### `stringUtils.camelCase(text)`
Converts a string to camel case.

**Return value:** Camel case string

### `stringUtils.kebabCase(text)`
Converts a string to kebab case.

**Return value:** Kebab case string

### `stringUtils.snakeCase(text)`
Converts a string to snake case.

**Return value:** Snake case string

### `stringUtils.isPalindrome(text)`
Checks if a string is a palindrome.

**Return value:** Boolean - `true`: string is palindrome, `false`: string is not palindrome

