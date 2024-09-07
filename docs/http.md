# HTTP Module

## Importing
If you have not already, install Omniutils.
```bash
npm i @connormerk/omniutils
```
Then, import the HTTP module.
```javascript
import { HttpClient } from '@connormerk/omniutils'
```

## Example Usage
```javascript
const httpClient = new HttpClient();
httpClient.setBaseUrl('https://api.example.com');

// GET request with query parameters
const response = await httpClient.get('/users', { params: { page: 1, limit: 10 } });
console.log(response);

// POST request with data
const data = { name: 'John Doe', email: 'johndoe@example.com' };
await httpClient.post('/users', data);

// PUT request with data
await httpClient.put('/users/1', data);

// PATCH request with data
await httpClient.patch('/users/1', { email: 'new_email@example.com' });

// DELETE request
await httpClient.delete('/users/1');
```

### Methods

#### `setBaseUrl(baseUrl)`
Sets the base URL for all requests.

#### `get(endpoint, options)`
Makes a GET request to the specified endpoint.

* **Parameters:**
  - `endpoint`: The endpoint to request.
  - `options`: Optional object with the following properties:
    - `headers`: An object containing request headers.
    - `params`: An object containing query parameters.

#### `post(endpoint, data, options)`
Makes a POST request to the specified endpoint with the given data.

* **Parameters:**
  - `endpoint`: The endpoint to request.
  - `data`: The data to send in the request body.
  - `options`: Optional object with the following properties:
    - `headers`: An object containing request headers.

#### `put(endpoint, data, options)`
Makes a PUT request to the specified endpoint with the given data.

* **Parameters:**
  - `endpoint`: The endpoint to request.
  - `data`: The data to send in the request body.
  - `options`: Optional object with the following properties:
    - `headers`: An object containing request headers.

#### `patch(endpoint, data, options)`
Makes a PATCH request to the specified endpoint with the given data.

* **Parameters:**
  - `endpoint`: The endpoint to request.
  - `data`: The data to send in the request body.
  - `options`: Optional object with the following properties:
    - `headers`: An object containing request headers.

#### `delete(endpoint, options)`
Makes a DELETE request to the specified endpoint.

* **Parameters:**
  - `endpoint`: The endpoint to request.
  - `options`: Optional object with the following properties:
    - `headers`: An object containing request headers.
