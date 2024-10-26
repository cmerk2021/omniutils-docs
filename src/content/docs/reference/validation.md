---
title: Data Validation
description: Documentation for the OmniUtils Data Validation module.
sidebar:
  # Uses the default variant matching your site’s accent color
  badge: New
---

The Data Validation module provides useful functions for validating different types of data.

## Installation
To install, you can import the module from OmniUtils

```javascript
import { dataValidation } from '@connormerk/omniutils'
```

## Functions

### `dataValidation.validateEmail(email)`
**Validates an email address**

* **email (string):** The email address to validate.

**Return value:** A boolean indicating whether the email address is valid.

### `dataValidation.validatePhoneNumber(phoneNumber)`
**Validates a US phone number**

* **phoneNumber (string):** The phone number to validate. This function is specifically designed for US phone numbers in the format of 10 digits.

**Return value:** A boolean indicating whether the phone number is valid. For other regions, you might need to adjust the regular expression to match the specific format.

### `dataValidation.validateUrl(url)`
**Validates a URL**

* **url (string):** The URL to validate.

**Return value:** A boolean indicating whether the URL is valid. This regular expression is quite comprehensive and covers a wide range of URL formats, but it's still possible that some edge cases might not be handled correctly.

### `dataValidation.validatePostalCode(postalCode)`
**Validates a US postal code**

* **postalCode (string):** The postal code to validate. This function is specifically designed for US postal codes in the format of 5 digits or 9 digits with a hyphen.

**Return value:** A boolean indicating whether the postal code is valid. For other regions, you might need to adjust the regular expression to match the specific format.

### `dataValidation.validatePassword(password, minLength, requireUppercase, requireLowercase, requireNumber, requireSpecialChar)`
**Validates a password based on specified criteria**

* **password (string):** The password to validate.
* **minLength (number, optional):** The minimum required length of the password. Defaults to 8.
* **requireUppercase (boolean, optional):** Whether the password must contain at least one uppercase letter. Defaults to true.
* **requireLowercase (boolean, optional):** Whether the password must contain at least one lowercase letter. Defaults to true.
* **requireNumber (boolean, optional):** Whether the password must contain at least one number. Defaults to true.
* **requireSpecialChar (boolean, optional):** Whether the password must contain at least one special character. Defaults to true.

**Return value:** A boolean indicating whether the password meets the specified criteria.
