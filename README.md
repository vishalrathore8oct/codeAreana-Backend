# CodeAreana Backend

The **CodeAreana Backend** is a Node.js-based backend application built with Express.js. It provides APIs for user authentication, email verification, password management, and user profile management. The project uses Prisma as the ORM for database interactions and follows a modular architecture for scalability and maintainability.

---

## Features

- **User Authentication**: Register, login, logout, and refresh access tokens.
- **Email Verification**: Verify user email addresses and resend verification emails.
- **Password Management**: Forgot password and reset password functionality.
- **User Profile Management**: Retrieve user profile details.
- **Validation**: Input validation using `express-validator`.
- **Error Handling**: Centralized error handling with detailed validation error responses.
- **Swagger Documentation**: API documentation using Swagger.
- **Logging**: Request logging using `morgan` and custom logger middleware.

---

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for building APIs.
- **Prisma**: ORM for database interactions.
- **PostgreSQL**: Database for storing user data.
- **express-validator**: Middleware for request validation.
- **dotenv**: Environment variable management.
- **Swagger**: API documentation.
- **bcryptjs**: Password hashing.
- **jsonwebtoken**: Token-based authentication.
- **nodemailer**: Email sending functionality.

