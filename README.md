# Welcome to CodeAreana Backend 👋

<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/vishalrathore8oct/codeAreana-Backend#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/vishalrathore8oct/codeAreana-Backend/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/vishalrathore8oct/codeAreana-Backend/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/vishalrathore8oct/codeareana-backend" />
  </a>
  <a href="https://twitter.com/vishalrathore66" target="_blank">
    <img alt="Twitter: @vishalrathore66" src="https://img.shields.io/twitter/follow/vishalrathore66.svg?style=social" />
  </a>
</p>

---

## 📖 Overview

**CodeAreana Backend** is a powerful and scalable backend application designed to support a competitive programming platform. It provides a comprehensive set of RESTful APIs for managing users, coding problems, playlists, submissions, and code execution.

Built with **Node.js**, **Express.js**, and **Prisma ORM**, the backend ensures seamless database interactions and follows a modular architecture for maintainability and scalability.

### ✨ Key Highlights

- **User Authentication:** JWT-based with role-based access control.
- **Problem Management:** Create, update, delete, and fetch coding problems.
- **Playlists:** Manage sets of coding problems.
- **Submissions:** Track user submissions and problem-solving progress.
- **Code Execution:** Integrates with Judge0 API to execute code.
- **Swagger Documentation:** Easily explore and test APIs.

---

## 🛠 Features

- 🔐 **Authentication:** Secure user registration, login, email verification, and password reset.
- 🧠 **Problem Management:** Full CRUD with constraints, examples, and test cases.
- 📚 **Playlists:** Create and manage categorized problem sets.
- 💻 **Code Execution:** Evaluate code using Judge0 API.
- 📈 **Submissions:** Record user problem-solving history.
- ✅ **Validation:** Input validation using middleware.
- ⚠️ **Error Handling:** Centralized and consistent.
- 📘 **Swagger UI:** Interactive API documentation.

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

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL (or any database supported by Prisma)

### Installation

```bash
# Clone the repository
git clone https://github.com/vishalrathore8oct/codeAreana-Backend.git
cd codeAreana-Backend

# Install dependencies
npm install

# Set up the database
# Update the DATABASE_URL in .env
npx prisma migrate dev

# Start the development server
npm run dev
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory with the following:

```env
PORT=8000
NODE_ENV=development
FRONTEND_URL=<your_frontend_url>

SMTP_HOST=<your_smtp_host>
SMTP_PORT=<your_smtp_port>
SMTP_USERNAME=<your_smtp_username>
SMTP_PASSWORD=<your_smtp_password>
SMTP_FROM=info@mailtrap.club

COUDINARY_CLOUD_NAME=<your_cloud_name>
CLOUDINARY_API_KEY=<your_api_key>
CLOUDINARY_API_SECRET=<your_api_secret>

DATABASE_URL=<your_database_url>

ACCESS_TOKEN_SECRET=<your_access_token_secret>
ACCESS_TOKEN_EXPIRES_IN=1h
REFRESH_TOKEN_SECRET=<your_refresh_token_secret>
REFRESH_TOKEN_EXPIRES_IN=14d

JUDGE0_BASE_URL=<your_jduge0_engine_url>
```

---

## 📜 API Documentation (Swagger UI)


After starting the development server, you can **interactively test all APIs using Swagger UI** here:
```
http://127.0.0.1:8000/api-docs
```

---

## 📂 Project Structure

```
codeareana-backend/
├── src/
│   ├── app.js                # Main application setup
│   ├── index.js              # Entry point
│   ├── config/               # Configuration (e.g., Prisma)
│   ├── controllers/          # Route handlers
│   ├── middlewares/          # Custom middleware
│   ├── routes/               # API routes
│   ├── services/             # External services (e.g., email, Judge0)
│   ├── utils/                # Utility functions
│   ├── validators/           # Request validation logic
│   └── generated/            # Prisma-generated files
├── prisma/
│   └── schema.prisma         # Prisma schema
├── sampleData.json           # Sample problems and test data
├── .env                      # Environment variables
├── package.json              # Project metadata and dependencies
└── README.md                 # Project documentation
```

---

## 🔧 Scripts

| Task                    | Command                       |
|-------------------------|-------------------------------|
| Start Dev Server        | `npm run dev`                 |
| Start Production Server | `npm start`                   |
| Run Migrations          | `npx prisma migrate dev`      |
| Generate Prisma Client  | `npx prisma generate`         |

---

## 👤 Author

**Vishal Rathore**

- 🔗 [Website](https://vishalrathore.hashnode.dev)
- 🐦 [Twitter](https://twitter.com/vishalrathore66)
- 💼 [LinkedIn](https://linkedin.com/in/vishalrathore)
- 💻 [GitHub](https://github.com/vishalrathore8oct)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/vishalrathore8oct/codeAreana-Backend/issues).

---

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

## 📝 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).