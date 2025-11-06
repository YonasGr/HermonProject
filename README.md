# HermonProject

A simple form page with user validation using React for the frontend and Node.js for the backend.

## Features

- User registration form with validation
- Real-time validation feedback
- Beautiful gradient UI with animations
- Backend API validation for:
  - Username (3-20 characters, alphanumeric + underscores)
  - Email (valid email format)
  - Password (min 8 characters, must contain uppercase, lowercase, and number)

## Tech Stack

- **Frontend**: React + Vite
- **Backend**: Node.js + Express
- **Styling**: Custom CSS with gradients and animations

## Project Structure

```
HermonProject/
├── backend/
│   ├── server.js          # Express server with validation API
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── UserForm.jsx   # Main form component
│   │   ├── UserForm.css   # Form styling
│   │   ├── App.jsx        # Root component
│   │   └── index.css      # Global styles
│   └── package.json
└── README.md
```

## Setup and Installation

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```
   The server will run on http://localhost:3001

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The app will run on http://localhost:5173

## Usage

1. Start the backend server first (port 3001)
2. Start the frontend development server (port 5173)
3. Open your browser and navigate to http://localhost:5173
4. Fill in the form and submit to see validation in action

## API Endpoints

### POST /api/validate-user

Validates user registration data.

**Request Body:**
```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "User validation successful!",
  "user": {
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "errors": {
    "username": "Username must be at least 3 characters long",
    "email": "Please enter a valid email address",
    "password": "Password must contain at least one uppercase letter, one lowercase letter, and one number"
  }
}
```

### GET /api/health

Health check endpoint.

**Response:**
```json
{
  "status": "OK"
}
```
