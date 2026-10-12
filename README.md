# Simple REST API

A simple RESTful API built with Node.js and Express. It provides CRUD operations for managing a list of items, stored in memory.

## Live Demo

https://simple-rest-api-1-gl3g.onrender.com

(The free hosting plan sleeps when idle, so the first request can take up to 50 seconds.)

## Features

- Get all items
- Get a single item by ID
- Add a new item
- Update an item
- Delete an item
- Input validation and error handling (400 and 404 responses)

## Tech Stack

- Node.js
- Express.js
- Nodemon (development)

## Project Structure

```
simple-rest-api/
├── controllers/
│   └── itemController.js
├── routes/
│   └── items.js
├── server.js
└── package.json
```

## Getting Started

1. Clone the repository
```bash
   git clone https://github.com/pratiksha0604/simple-rest-api.git
   cd simple-rest-api
```
2. Install dependencies
```bash
   npm install
```
3. Start the server
```bash
   npm start
```
   For development with auto-restart:
```bash
   npm run dev
```
4. Open `http://localhost:3000`

## API Endpoints

| Method | Endpoint         | Description       |
|--------|------------------|-------------------|
| GET    | `/api/items`     | Get all items     |
| GET    | `/api/items/:id` | Get one item      |
| POST   | `/api/items`     | Create a new item |
| PUT    | `/api/items/:id` | Update an item    |
| DELETE | `/api/items/:id` | Delete an item    |

## Example Request

```json
POST /api/items
{
  "name": "New Item"
}
```

## Note

Data is stored in memory, so it resets when the server restarts.