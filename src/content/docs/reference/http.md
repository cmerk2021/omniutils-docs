---
title: HTTP Client
description: Documentation for the OmniUtils built-in HTTP client.
---

This JavaScript module provides a simple HTTP client for making requests to RESTful APIs. It handles common HTTP request patterns and error handling.

### Usage

1. **Import the module:**
   ```javascript
   import { HttpClient } from '@connormerk/omniutils';
   ```

2. **Create an instance:**
   ```javascript
   const httpClient = new HttpClient();
   ```

3. **Set the base URL:**
   ```javascript
   httpClient.setBaseUrl('https://api.example.com'); // Replace with your base URL
   ```

4. **Make HTTP requests:**
   Use the provided methods to make different types of requests:
   * **GET:**
     ```javascript
     const response = await httpClient.get('/users');
     console.log(response);
     ```
   * **POST:**
     ```javascript
     const data = { name: 'John Doe', email: 'john@example.com' };
     const response = await httpClient.post('/users', data);
     console.log(response);
     ```
   * **PUT:**
     ```javascript
     const updatedData = { name: 'Jane Doe' };
     const response = await httpClient.put('/users/1', updatedData);
     console.log(response);
     ```
   * **PATCH:**
     ```javascript
     const patchData = { email: 'jane@example.com' };
     const response = await httpClient.patch('/users/1', patchData);
     console.log(response);
     ```
   * **DELETE:**
     ```javascript
     const response = await httpClient.delete('/users/1');
     console.log(response);
     ```

### Options

You can customize requests by passing options to the methods via a table as the third argument of each function:
* **headers:** Add custom headers to the request.
* **params:** Add query parameters to the URL.
* **body:** The data to send in the request body (for POST, PUT, and PATCH).

For example,
```javascript
const headers = { "Content-Type": "application/json" }
const data = { name: 'John Doe', email: 'john@example.com' };
const response = await httpClient.post('/users', data, {headers});
console.log(response);
```

The above adds a header to the request via the third argument of the `post` function.

### Error Handling

The module automatically handles HTTP errors. If a request fails, it throws an error with the status code and status text. You can catch this error and handle it accordingly.

### Additional Notes

* The module assumes that the response body is JSON-encoded. If you're expecting a different format, you'll need to handle the response appropriately.
* For more complex scenarios, you might consider using a more advanced HTTP client library that provides additional features like authentication, rate limiting, and caching.
