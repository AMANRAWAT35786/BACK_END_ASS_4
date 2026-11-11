# Secure Connect and Communication Platform (Lab 4)

Backend application built with Node.js, Express, MongoDB, and Socket.IO.
Provides authentication with JWT and bcrypt, protected Notes CRUD operations,
and real-time room-based chat authenticated with JWT.

## Setup and Running

1. Copy `.env.example` to `.env` and configure variables:
   ```bash
   cp .env.example .env
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```
   For development with auto-reload:
   ```bash
   npm run dev
   ```

Server runs on `http://localhost:5000` by default.

## API Endpoints

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/api/auth/signup` | Public | Register new user |
| POST | `/api/auth/login` | Public | Login and receive JWT |
| GET | `/api/auth/profile` | Bearer / Cookie | Get profile of logged-in user |
| GET | `/api/auth/admin` | Admin role | Admin-only route |
| POST | `/api/notes` | Bearer / Cookie | Create a note |
| GET | `/api/notes` | Bearer / Cookie | Get all notes of logged-in user |
| GET | `/api/notes/:id` | Bearer / Cookie | Get note by ID |
| PUT | `/api/notes/:id` | Bearer / Cookie | Update note by ID |
| DELETE | `/api/notes/:id` | Bearer / Cookie | Delete note by ID |

Real-time chat is available at `http://localhost:5000/chat.html` (requires JWT token).

## Screenshots

<!-- Add screenshots here -->
