# Express + TypeScript Server API Documentation

## Overview

This project is an Express server written in TypeScript. It provides a few endpoints to interact with a backend service. It uses `pino` for logging and `PocketBase` for database operations.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- PocketBase server

### Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory with the following content:
   ```env
   PORT=3013
   ```

### Running the Server

To start the server, run:
```bash
npm run dev
```

The server will be running on `http://localhost:3013`.

## API Endpoints

### 1. Home Endpoint

#### GET `/`

**Description:**
Returns a simple message indicating that the server is running.

**Response:**
```json
"Express + TypeScript Server"
```

### 2. API Status Endpoint

#### GET `/api`

**Description:**
Returns a message indicating that the API is working.

**Response:**
```json
"API is working"
```

### 3. Get City Information

#### GET `/api/city`

**Description:**
Fetches information about a city from the database. If the city is not found, it triggers a collection process.

**Query Parameters:**
- `city` (string, required): The name of the city to fetch.

**Responses:**

- **200 OK:** Record From PocketBase

- **400 Bad Request:** City name is required.
  ```json
  {
    "error": "City name is required"
  }
  ```
- **500 Internal Server Error:** Error fetching city.
  ```json
  {
    "error": "Error fetching city"
  }
  ```

### 4. Stop City Data Collection

#### POST `/api/city/stop`

**Description:**
Stops the data collection process for a specified city.

**Query Parameters:**
- `city` (string, required): The name of the city to stop collecting data for.

**Responses:**

- **200 OK:** City data collection stopped successfully.
  ```json
  {
    "message": "City data collection stopped"
  }
  ```
- **400 Bad Request:** City name is required.
  ```json
  {
    "error": "City name is required"
  }
  ```

### 5. Stop All Data Collections

#### POST `/api/stopall`

**Description:**
Stops data collection for all cities.

**Responses:**

- **200 OK:** All data collections stopped successfully.
  ```json
  {
    "message": "All data collections stopped"
  }
  ```

## Logging

The server uses `pino` for logging. Logs are output to the console in a readable format using `pino-pretty`.

## Environmental Variables

- `PORT`: The port on which the server runs. Default is `3013`.

## Notes

- The server interacts with a PocketBase instance running at `http://127.0.0.1:8090`.
- An external service (collector) is used for additional data collection processes. The base URL for this service is `http://localhost:3000/`.
