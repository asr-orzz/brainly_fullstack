# Brainly Fullstack Project

This is a full-stack web application built with React and Node.js, designed to demonstrate a modern web development setup. The frontend is written using **Vite**, **React**, and **TypeScript**, while the backend is built using **Node.js**, **Express**, and **MongoDB**. The app also leverages several modern libraries for styling, API requests, input validation, and more.

## Tech Stack

### Frontend:
- **Vite**: Build tool for a fast development environment.
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static types.
- **Tailwind CSS**: Utility-first CSS framework for styling the website.
- **Axios**: Promise-based HTTP client for making API requests.

### Backend:
- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: Web framework for Node.js to create the backend server.
- **Mongoose**: MongoDB object modeling tool for Node.js.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing.
- **jsonwebtoken**: Library to handle JSON Web Tokens for authentication.
- **Zod**: Type-safe schema validation library.

## Project Setup

To run this project locally, follow these steps:

### 1. Clone the repository:
```bash
git clone https://github.com/asr-orzz/brainly_fullstack
```

### 2. Install frontend dependencies:
- Go into the `frontend` directory and install the required dependencies.
```bash
cd frontend
npm install
```

### 3. Install backend dependencies:
- Go into the `backend` directory and install the required dependencies.
```bash
cd ../backend
npm install
```

### 4. Setup environment variables:
- Copy the `.env.example` file to `.env` and configure the required environment variables.
```bash
cp .env.example .env
```
- Add the following to your `.env` file:
  - `PORT=3000` (or any port of your choice)
  - MongoDB connection URL (`MONGO_URL=your_mongo_url`)
  - JSON Web Token secret (`JWT_SECRET=your_jwt_secret`)
  - Any other necessary environment variables as required by your setup.

### 5. Run the backend server:
- In the `backend` directory, run the backend server.
```bash
npm run dev
```

### 6. Run the frontend server:
- In the `frontend` directory, start the frontend server.
```bash
npm run dev
```

Now both servers should be running, and you can open the frontend in your browser (typically at `http://localhost:3000`).

## Folder Structure

```
- backend/
  - config/        # Configuration files (e.g., database connection)
  - controllers/   # API controllers
  - models/        # Mongoose models
  - routes/        # API routes
  - services/      # Business logic and services
  - .env.example   # Environment variable template
  - package.json   # Backend dependencies and scripts
  - server.js      # Backend entry point
  - utils/         # Utility functions (e.g., JWT token creation, error handling)
  
- frontend/
  - src/
    - components/  # React components
    - pages/       # Page components
    - services/    # Axios API calls and services
    - App.tsx      # Main React application entry point
    - index.tsx    # React app rendering entry point
    - tailwind.config.js # Tailwind CSS configuration
    - tsconfig.json # TypeScript configuration
  - .env.example   # Environment variable template for frontend
  - package.json   # Frontend dependencies and scripts
```

## Features

- **Frontend**: Built with React and styled using Tailwind CSS. The frontend is responsible for user interaction and making requests to the backend.
- **Backend**: Built with Node.js and Express, handling API requests, authentication, and communication with MongoDB. Input validation is done using Zod for schema validation.

## Contribution

Feel free to fork this repository and submit pull requests. If you find any issues or bugs, please create an issue to track them.
