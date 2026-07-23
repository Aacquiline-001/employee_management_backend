# Employee Management API
RESTful Employee Management API using Node.js, Express.js, MongoDB, Mongoose, and Postman

## Tech Stack

- Node.js / Express
- MongoDB / Mongoose
- dotenv


### Prerequisites

- Node.js
- A MongoDB instance (local or Atlas)

### Installation

```bash
npm install
```

### Configuration

Create a `.env` file in the project root with:

```
PORT=3000
MONGO_URI=<your MongoDB connection string>
```

### Run

```bash
node server.js
```

The server starts on `http://localhost:<PORT>` (defaults to 3000 if `PORT` is not set).

## Employee Model

| Field        | Type   | Notes                                              |
|--------------|--------|-----------------------------------------------------|
| employeeId   | String | Required, unique, format `EMP001`, `EMP002`, etc.  |
| fullName     | String | Required, min 3 characters                          |
| department   | String | Required                                             |
| designation  | String | Required                                             |
| salary       | Number | Required, minimum 15000                              |
| email        | String | Required, unique, must be a valid email              |
| phone        | String | Required, 10 digits                                  |
| joiningDate  | Date   | Defaults to current date                              |
| status       | String | `Active` or `Inactive`                                |

## API Endpoints

Base path: `/api/employees`

| Method | Endpoint             | Description                    |
|--------|-----------------------|--------------------------------|
| GET    | `/`                    | Get all employees              |
| POST   | `/`                    | Create a new employee          |
| GET    | `/:employeeId`         | Get an employee by employeeId  |
| PUT    | `/:employeeId`         | Update an employee              |
| DELETE | `/:employeeId`         | Delete an employee              |

## Project Structure

```
.
├── connection.js              # MongoDB connection setup
├── server.js                  # App entry point
├── models/
│   └── employeeModels.js      # Employee Mongoose schema
└── routes/
    └── employeeRoutes.js      # Employee CRUD routes
```
