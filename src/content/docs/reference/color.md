---
title: Color Utils
description: Documentation for the Color Utils Omniutils module.
sidebar:
  # Uses the default variant matching your site’s accent color
  badge: New
---

The Color Utils module provides useful functions for converting and manipulating colors.

## Installation
To install, you can import the module from OmniUtils

```javascript
import { colorUtils } from '@connormerk/omniutils'
```

## Functions

### `colorUtils.rgbToHsl(r, g, b)`
**Converts RGB color values to HSL color values**

* **r (number):** The red component of the RGB color, in the range of 0-255.
* **g (number):** The green component of the RGB color, in the range of 0-255.
* **b (number):** The blue component of the RGB color, in the range of 0-255.

**Return value:** An array containing the HSL color values: [hue, saturation, lightness], where:
  * **hue:** A number between 0 and 360, representing the color hue.
  * **saturation:** A number between 0 and 100, representing the color saturation.
  * **lightness:** A number between 0 and 100, representing the color lightness.

### `colorUtils.hslToRgb(h, s, l)`
**Converts HSL color values to RGB color values**

* **h (number):** The hue of the HSL color, in the range of 0-360.
* **s (number):** The saturation of the HSL color, in the range of 0-100.
* **l (number):** The lightness of the HSL color, in the range of 0-100.

**Return value:** An array containing the RGB color values: [red, green, blue], where each value is an integer in the range of 0-255.

### `colorUtils.rgbToHex(r, g, b)`
**Converts RGB color values to a hexadecimal color code**

* **r (number):** The red component of the RGB color, in the range of 0-255.
* **g (number):** The green component of the RGB color, in the range of 0-255.
* **b (number):** The blue component of the RGB color, in the range of 0-255.

**Return value:** A string representing the hexadecimal color code, in the format '#RRGGBB'.

### `colorUtils.hexToRgb(hex)`
**Converts a hexadecimal color code to RGB color values**

* **hex (string):** The hexadecimal color code, in the format '#RRGGBB' or 'RRGGBB'.

**Return value:** An array containing the RGB color values: [red, green, blue], where each value is an integer in the range of 0-255. If the input hexadecimal code is invalid, null is returned.

### `colorUtils.hsvToRgb(h, s, v)`
**Converts HSV color values to RGB color values**

* **h (number):** The hue of the HSV color, in the range of 0-360.
* **s (number):** The saturation of the HSV color, in the range of 0-100.
* **v (number):** The value (brightness) of the HSV color, in the range of 0-100.

**Return value:** An array containing the RGB color values: [red, green, blue], where each value is an integer in the range of 0-255.

### `colorUtils.rgbToHsv(r, g, b)`
**Converts RGB color values to HSV color values**

* **r (number):** The red component of the RGB color, in the range of 0-255.
* **g (number):** The green component of the RGB color, in the range of 0-255.
* **b (number):** The blue component of the RGB color, in the range of 0-255.

**Return value:** An array containing the HSV color values: [hue, saturation, value], where:
  * **hue:** A number between 0 and 360, representing the color hue.
  * **saturation:** A number between 0 and 100, representing the color saturation.
  * **value:** A number between 0 and 100, representing the color value (brightness).

### `colorUtils.lighten(color, percent)`
**Lightens a hexadecimal color by a given percentage**

* **color (string):** The hexadecimal color code to lighten, in the format '#RRGGBB' or 'RRGGBB'.
* **percent (number):** The percentage to lighten the color by, as a decimal (e.g., 0.1 for 10%).

**Return value:** A new hexadecimal color code representing the lightened color.

### `colorUtils.darken(color, percent)`
**Darkens a hexadecimal color by a given percentage**

* **color (string):** The hexadecimal color code to darken, in the format '#RRGGBB' or 'RRGGBB'.
* **percent (number):** The percentage to darken the color by, as a decimal (e.g., 0.1 for 10%).

**Return value:** A new hexadecimal color code representing the darkened color.

### `colorUtils.randomColor()`
**Generates a random hexadecimal color code**

**Return value:** A string representing a random hexadecimal color code, in the format '#RRGGBB'.
