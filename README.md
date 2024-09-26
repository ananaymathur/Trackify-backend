# Trackify Backend

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

The backend for Trackify, a job application tracker, provides the server-side logic, API endpoints, and authentication mechanisms to support the frontend application. Built with Node.js and Express, this backend manages user authentication, data storage, and application logic securely and efficiently.

## Features

- **JWT Authentication**: Secure user authentication using JSON Web Tokens.
- **RESTful API**: Provides endpoints for managing users, job applications, and session handling.
- **Session Management**: Automatically handles session expiration and invalidation of expired tokens.
- **Error Handling**: Comprehensive error handling to provide clear responses for various HTTP requests.
- **Security**: Implements best practices for security, including input validation and token-based authorization.

## Technologies Used

- **Node.js**: JavaScript runtime environment for server-side development.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: NoSQL database for storing user and job data.
- **Mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **JWT (JSON Web Tokens)**: For secure user authentication and session management.
- **Dotenv**: For managing environment variables.
- **Axios**: For server-side HTTP requests.

## Project Structure

```
├── src 
├── .env
├── server.js 
├── config
│   └── db.js
├── models
│   ├── Job.js 
│   └── User.js 
├── routes 
│   ├── auth.js
│   └── jobs.js
├── package.json 
└── README.md
```


## Getting Started

Follow these instructions to set up the backend server locally.

### Prerequisites

- **Node.js** (v14+)
- **npm** (v6+) or **yarn** (v1.22+)
- **MongoDB**: Make sure you have MongoDB installed locally or have access to a MongoDB Atlas cluster.

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/trackify-backend.git
    cd trackify-backend
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up environment variables**

    Create a .env file in the root directory and add the following:

    ```bash
    PORT=4000
    MONGO_URI=mongo_uri
    JWT_SECRET=your_jwt_secret
    ```

    Replace MONGO_URI with your MongoDB connection string and set JWT_SECRET to a secure secret key for JWT signing.

4. **Run the application**

    ```bash
    npm start
    ```

## API Documentation

<div align="center">

| Method | Endpoint            | Description                     |
|--------|---------------------|---------------------------------|
| POST   | /api/auth/register  | Register a new user             |
| POST   | /api/auth/login     | Login and get a token           |
| GET    | /api/jobs           | Get all jobs                    |
| POST   | /api/jobs           | Create a new job application    |
| PUT    | /api/jobs/:id       | Update a job application        |

</div>

## Configuration

- **MongoDB Connection:** Ensure the MONGO_URI in the .env file is set to your MongoDB connection string.
- **JWT Secret:** The JWT_SECRET in .env should be a strong, unique secret key used for signing JWT tokens.

## Contributing

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/NewFeature)
3. Commit your Changes (git commit -m 'Add some feature')
4. Push to the Branch (git push origin feature/NewFeature)
5. Open a Pull Request

