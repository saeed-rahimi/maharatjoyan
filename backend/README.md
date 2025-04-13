# Maharat Joyan Backend

This is the backend server for Maharat Joyan, a construction services marketplace platform.

## Features

- User authentication (JWT)
- Project management
- Real-time chat using Socket.IO
- Geolocation-based search
- Proposal system
- Rating and review system

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/maharatjoyan
   JWT_SECRET=your-super-secret-key-change-this-in-production
   FRONTEND_URL=http://localhost:3000
   ```
4. Start MongoDB service
5. Run the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication

- POST /api/auth/register - Register new user
- POST /api/auth/login - Login user
- GET /api/auth/profile - Get user profile
- PUT /api/auth/profile - Update user profile

### Projects

- POST /api/projects - Create new project
- GET /api/projects - Get all projects with filters
- GET /api/projects/nearby - Get nearby projects
- GET /api/projects/:id - Get project by ID
- POST /api/projects/:id/proposals - Submit proposal
- PUT /api/projects/:id/proposals/:proposalId/accept - Accept proposal
- PUT /api/projects/:id/status - Update project status

### Chat

- GET /api/chat - Get all chats for user
- GET /api/chat/:id - Get chat by ID
- POST /api/chat - Create new chat
- POST /api/chat/:id/messages - Send message
- PUT /api/chat/:id/messages/read - Mark messages as read

## Socket.IO Events

### Client to Server

- join-chat - Join a chat room
- send-message - Send a message
- leave-chat - Leave a chat room

### Server to Client

- receive-message - Receive a new message

## Development

The server uses nodemon for development, which automatically restarts when files change.

## Production

For production deployment:

1. Set appropriate environment variables
2. Run `npm start` instead of `npm run dev`
3. Use a process manager like PM2
4. Set up proper MongoDB security
5. Use HTTPS
6. Set up proper CORS configuration
