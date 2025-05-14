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

## Database Schema

The database schema for the CodeAreana Backend is designed using Prisma and includes models for `User` and `Problem` and many more. You can view the detailed schema and relationships in the ERD linked below:

### ERD Diagram
You can view the database schema visually using the following link:  
[View Database Schema on Earser.io](https://app.eraser.io/workspace/66aHTlBAm9UsazEB7khj?origin=share)