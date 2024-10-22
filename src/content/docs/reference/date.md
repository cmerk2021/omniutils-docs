---
title: Date & Time Utils
description: Documentation for the Date & Time Utils OmniUtils module.
sidebar:
  # Uses the default variant matching your site’s accent color
  badge: New
---

The Date & Time Utils module provides useful functions for operating with and parsing date/time formats.

## Installation

## Functions

### `dateUtils.formatDate(date, format)`

Formats a date object according to a specified format string.

* **date (Date object):** The date object to format.
* **format (string):** The format string that specifies how the date should be formatted. Common format specifiers include:
    * YYYY: Full numeric year (e.g., 2024)
    * YY: Abbreviated numeric year (e.g., 24)
    * MMMM: Full month name (e.g., October)
    * MMM: Abbreviated month name (e.g., Oct)
    * MM: Zero-padded numeric month (e.g., 10)
    * DD: Zero-padded numeric day (e.g., 19)
    * HH: Zero-padded 24-hour clock (e.g., 16)
    * hh: Zero-padded 12-hour clock (e.g., 04)
    * mm: Zero-padded minutes (e.g., 23)
    * ss: Zero-padded seconds (e.g., 55)
    * a: AM/PM indicator (e.g., PM)
    * z: Abbreviated time zone name (e.g., MDT)
    * Z: Full time zone name (e.g., Mountain Daylight Time)

**Return value:** A new string representing the formatted date.

### `dateUtils.parseDate(dateString)`
Parses a date string into a Date object.

* **dateString (string):** The string representing the date to be parsed. Can be in various formats including:
    * ISO 8601 formats (YYYY-MM-DD, YYYY-MM-DDTHH:mm:ss[.SSS][Z])
    * Common US formats (MM/DD/YYYY, MM/DD/YY)
    * European formats (DD/MM/YYYY, DD.MM.YYYY)
    * Formats with time zones (YYYY-MM-DDTHH:mm:ss[Z][+/-]HH:mm)

**Return value:** A new Date object representing the parsed date, or null if the date string is in an invalid format. An error message is also logged to the console in case of an invalid format.

### `dateUtils.getTimezoneOffset(location)`
Gets the time zone offset for a given location.

* **location (string):** The time zone identifier (e.g., "America/Denver").

**Return value:** An integer representing the time zone offset in minutes. Positive values indicate time zones ahead of UTC, and negative values indicate time zones behind UTC.

### `dateUtils.addDays(date, days)`
Adds a specified number of days to a given date.

* **date (Date object):** The date to add days to.
* **days (number):** The number of days to add.

**Return value:** A new Date object representing the date with the specified number of days added.

### `dateUtils.subtractDays(date, days)`
Subtracts a specified number of days from a given date.

* **date (Date object):** The date to subtract days from.
* **days (number):** The number of days to subtract.

**Return value:** A new Date object representing the date with the specified number of days subtracted.


