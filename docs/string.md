# String Utils

String Utils module provides functions for manipulating strings.

If you have not already, install Omniutils
```bash
npm i @connormerk/omniutils
```
Then, import the `stringUtils` library.
```javascript
import { stringUtils } from '@connormerk/omniutils'
```

## Functions

#### `stringUtils.capitalize(string)`

- Takes a string as input.
- Returns a new string with the first character capitalized and the rest remaining lowercase.

```javascript
stringUtils.capitalize(string)
```

**Parameters:**

- `string`: The string to capitalize.

#### `stringUtils.decapitalize(string)`

- Takes a string as input.
- Returns a new string with the first character lowercase and the rest remaining unchanged.

```javascript
stringUtils.decapitalize(string)
```

**Parameters:**

- `string`: The string to decapitalize.

#### `stringUtils.reverse(string)`

- Takes a string as input.
- Returns a new string with the characters reversed.

```javascript
stringUtils.reverse(string)
```

**Parameters:**

- `string`: The string to reverse.

#### `stringUtils.truncate(str, length)`

- Takes a string and a maximum length as input.
- Returns a new string that is truncated to the specified length, with an ellipsis ("...") appended if the original string is longer.

```javascript
stringUtils.truncate(str, length)
```

**Parameters:**

- `str`: The string to truncate.
- `length`: The maximum length of the truncated string.

#### `stringUtils.slugify(str)`

- Takes a string as input.
- Returns a new string that is converted to a slug format (lowercase, alphanumeric characters and hyphens only) suitable for URLs.

```javascript
stringUtils.slugify(str)
```

**Parameters:**

- `str`: The string to slugify.

#### `stringUtils.camelCase(str)`

- Takes a string as input.
- Returns a new string converted to camelCase format, where each word starts with a capital letter (except the first word).

```javascript
stringUtils.camelCase(str)
```

**Parameters:**

- `str`: The string to convert to camelCase.

#### `stringUtils.kebabCase(str)`

- Takes a string as input.
- Returns a new string converted to kebab-case format, where words are separated by hyphens.

```javascript
stringUtils.kebabCase(str)
```

**Parameters:**

- `str`: The string to convert to kebabCase.

#### `stringUtils.snakeCase(str)`

- Takes a string as input.
- Returns a new string converted to snake_case format, where words are separated by underscores.

```javascript
stringUtils.snakeCase(str)
```

**Parameters:**

- `str`: The string to convert to snakeCase.

#### `stringUtils.isPalindrome(str)`

- Takes a string as input.
- Returns `true` if the string is a palindrome (reads the same backward as forward), otherwise returns `false`.

```javascript
stringUtils.isPalindrome(str)
```

**Parameters:**

- `str`: The string to check for palindrome.
