---
title: Array Utils
description: Documentation for the Array Utils OmniUtils module.
---

The `arrayUtils` module provides useful functions for operating with arrays.

## Installation
To install, you can import the module from OmniUtils

```javascript
import { arrayUtils } from '@connormerk/omniutils'
```

## Functions

### `arrayUtils.flatten(array)`
Takes a nested array and returns a single-level array by recursively flattening any nested arrays.
* **array:** A nested array to flatten

### `arrayUtils.groupBy(array, property)`
Groups an array of objects by a specified property, returning an object where keys are the unique values of that property and values are arrays of objects with the corresponding property value.
* **array:** An array of objects.
* **property:** A string representing the name of the property to group by.


### `arrayUtils.shuffle(array)`
Takes an array as an argument and returns a new array with its elements randomly shuffled.
* **array:** The array to be shuffled.

### `arrayUtils.intersection(array1, array2)`
Finds the intersection of two arrays, returning a new array containing elements that are present in both arrays.
* **array1:** An array of elements.
* **array2:** An array of elements.

### `arrayUtils.difference(array1, array2)`
Finds the symmetric difference of two arrays, returning a new array containing elements that are present in one array but not the other.
* **array1:** An array of elements.
* **array2:** An array of elements.

### `arrayUtils.union(array1, array2)`
Finds the union of two arrays, returning a new array containing all unique elements from both arrays.
* **array1:** An array of elements.
* **array2:** An array of elements.

### `arrayUtils.unique(array)`
Removes duplicate elements from an array, returning a new array containing only unique elements.
* **array:** An array of elements.
