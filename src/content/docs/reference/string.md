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

### `stringUtils.capitalize(string)`
Capitalizes the first letter of a string.

* **string:** The string to capitalize.

**Return value:** A new string with the first letter capitalized.

### `stringUtils.decapitalize(string)`
Decapitalizes the first letter of a string.

* **string:** The string to decapitalize.

**Return value:** A new string with the first letter decapitalized.


### `stringUtils.reverse(string)`
Reverses the characters of a string.

* **string:** The string to reverse.

**Return value:** A new string with the characters reversed.


### `stringUtils.truncate(str, length)`
Truncates a string to a specified length, adding an ellipsis if necessary.

* **str:** The string to truncate.
* **length:** The maximum length of the truncated string.

**Return value:** The truncated string, with an ellipsis added if the original string is longer than the specified length.


### `stringUtils.slugify(str)`
Converts a string into a URL-friendly slug.

* **str:** The string to convert.

**Return value:** A slugified version of the string, suitable for use in URLs.


### `stringUtils.camelCase(str)`
Converts a string to camel case.

* **str (string):** The string to convert.

**Return value:** A new string in camel case, where the first letter of each word is capitalized (except the first word) and words are joined together.


### `stringUtils.kebabCase(str)`
Converts a string to kebab case.

* **str (string):** The string to convert.

**Return value:** A new string in kebab case, where all letters are lowercase and words are separated by hyphens.


### `stringUtils.snakeCase(str)`
Converts a string to snake case.

* **str (string):** The string to convert.

**Return value:** A new string in snake case, where all letters are lowercase and words are separated by underscores.


### `stringUtils.isPalindrome(str)`
Checks if a string is a palindrome.

* **str (string):** The string to check.

**Return value:** A boolean indicating whether the string is a palindrome (true if it is, false if not).


