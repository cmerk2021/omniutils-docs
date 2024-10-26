---
title: Timer Class
description: Documentation for the Timer Omniutils module.
sidebar:
  # Uses the default variant matching your site’s accent color
  badge: New
---
The Timer class provides useful timer functions.

## Installation

To install, you can import the class from OmniUtils

```javascript
import { Timer } from '@connormerk/omniutils'
```

## `class Timer`:

**What it does:**

* Creates a timer object with a specified duration.
* Provides methods to start, pause, resume, and restart the timer.
* Executes a callback function when the timer finishes.
* Offers methods to retrieve remaining and elapsed time. 


**Properties:**

* `length`: (number) The duration of the timer in milliseconds.
* `callback`: (function) The function to be called when the timer completes.
* `startTime`: (number | null) Internal property to track the start time. (null when paused/stopped)
* `elapsedTime`: (number) The time elapsed since the timer started (including paused time).
* `paused`: (boolean) Indicates if the timer is currently paused.
* `intervalId`: (number | null) Internal property to store the interval identifier. (null when stopped)

**Methods:**

* **constructor(length, callback):** Creates a new `Timer` instance with the specified `length` (milliseconds) and `callback` function.
* **start():** Starts the timer if it's paused. Restarts it if it's stopped.
* **pause():** Pauses the timer, stopping its execution.
* **resume():** Resumes the timer if it's paused. Does nothing if it's running.
* **restart():** Resets the elapsed time to zero, pauses the timer, and then starts it again.
* **getRemainingTime():** Returns the remaining time in milliseconds (0 if finished).
* **getElapsedTime():** Returns the elapsed time in milliseconds.


**Example Usage:**

```javascript
import { Timer } from '@connormerk/omniutils';

const myTimer = new Timer(5000, () => {
  console.log("Timer finished!");
});

myTimer.start();

setTimeout(() => {
  myTimer.pause();
  console.log("Timer paused at", myTimer.getElapsedTime(), "milliseconds");
}, 2000);

setTimeout(() => {
  myTimer.resume();
}, 3000);

setTimeout(() => {
  console.log("Remaining time:", myTimer.getRemainingTime(), "milliseconds");
}, 4000);
```

**Note:**

* The timer updates every 10 milliseconds internally.
* The `getRemainingTime` method ensures a non-negative value (minimum 0 milliseconds).
