---
title: Object Utils
description: Documentation for the Object Utils OmniUtils module.
---

The `objectUtils` module provides useful functions for working with and manipulating objects.

## Installation
To install, you can import the module from OmniUtils

```javascript
import { objectUtils } from '@connormerk/omniutils'
```

## Functions

### `objectUtils.clone(obj)`
Creates a deep copy of an object, recursively copying nested objects and arrays.

* **obj:** The object to be cloned.

**Return value:** A deep copy of the given object.


### `objectUtils.merge(obj1, obj2)`
Merges two objects, giving priority to properties in the second object. If a property exists in both objects, the value from the second object will overwrite the value from the first object.

* **obj1:** The first object to be merged.
* **obj2:** The second object to be merged.

**Return value:** A new object containing the merged properties of both objects, with properties from the second object taking precedence.


### `objectUtils.pick(obj, keys)`
Creates a new object containing only the specified properties from the given object.
* **obj:** The object to pick properties from.
* **keys:** An array of strings representing the property names to pick.

**Return value:** A new object with the specified properties.

### `objectUtils.omit(obj, keys)`
Creates a new object containing all properties from the given object except for the specified properties.
* **obj:** The object to omit properties from.
* **keys:** An array of strings representing the property names to omit.

**Return value:** A new object with the specified properties removed.

### `objectUtils.isEmpty(obj)`
Checks if an object is empty (has no properties).
* **obj:** The object to check.

**Return value:** A boolean indicating whether the object is empty (true if empty, false if not).




