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

<img width="1077" height="1062" alt="image" src="https://github.com/user-attachments/assets/d1e40737-b8c8-49f3-9701-4e5e551a379c" />
<img width="1090" height="770" alt="image" src="https://github.com/user-attachments/assets/ad53a0f5-e0e0-4a18-8919-e7f66e5d2cbe" />
<img width="1077" height="831" alt="image" src="https://github.com/user-attachments/assets/aa10befa-bf58-44a4-861d-a6a2c35a667f" />
<img width="1077" height="850" alt="image" src="https://github.com/user-attachments/assets/1456cdfe-6675-4dbd-be41-d477a734f8bd" />

<img width="1042" height="957" alt="image" src="https://github.com/user-attachments/assets/294aae27-e48b-492c-b610-6a142189ed47" />
Aditi signup here
<img width="1077" height="860" alt="image" src="https://github.com/user-attachments/assets/01ea64a5-5e7a-416f-b3dc-db6dff76bfe9" />
Aditi login here 
<img width="1072" height="732" alt="image" src="https://github.com/user-attachments/assets/c07ef57c-d739-4229-b62b-93e067ed4d8a" />

Real-Time Chat (Socket.IO Console)

<img width="990" height="585" alt="image" src="https://github.com/user-attachments/assets/6c85f7a9-3290-4bf4-a919-934fdc0451db" />








