# Nature Lap Homestay Portal

A modern web application for booking homestays and managing hostel accommodations. Built as a monorepo with a React frontend, Express API, and PocketBase backend.

## Features

- **User Authentication**: Secure login and signup with role-based access (users and admins)
- **Hostel Listings**: Browse and search available homestays with detailed information
- **Room Management**: View room types, availability, and pricing
- **Booking System**: Protected booking functionality for authenticated users
- **Reviews & Ratings**: User reviews and feedback system
- **Wishlist**: Save favorite hostels for later
- **Admin Dashboard**: Administrative interface for managing hostels, rooms, and bookings
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS

## Tech Stack

### Frontend
- **React 18** with Vite for fast development
- **React Router** for client-side routing
- **Tailwind CSS** for styling
- **Radix UI** for accessible components
- **Framer Motion** for animations
- **React Hook Form** for form handling
- **Date-fns** for date manipulation

### Backend
- **PocketBase**: Open-source backend-as-a-service for database, authentication, and file storage
- **Express.js**: REST API server with middleware for security and rate limiting
- **CORS, Helmet, Morgan**: Security and logging middleware

### Development
- **NPM Workspaces**: Monorepo management
- **ESLint**: Code linting
- **Concurrently**: Running multiple services simultaneously

## Project Structure

```
lapstay/
├── apps/
│   ├── web/          # React frontend application
│   ├── api/          # Express.js API server
│   └── pocketbase/   # PocketBase backend and database
├── package.json      # Root package with workspace scripts
└── README.md
```

## Prerequisites

- Node.js 18+
- npm or yarn
- PocketBase binary (included in the project)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Lafa-Hackathon/lapstay.git
   cd lapstay
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**

   Create a `.env` file in the `apps/api` directory:
   ```env
   CORS_ORIGIN=http://localhost:3000
   PB_ENCRYPTION_KEY=your-encryption-key-here
   ```

   The PocketBase encryption key should be a secure random string.

## Development

### Start all services in development mode
```bash
npm run dev
```

This will start:
- Frontend at `http://localhost:3000`
- API server
- PocketBase admin panel at `http://localhost:8090/_/`

### Individual service commands

```bash
# Frontend only
npm run dev --prefix apps/web

# API only
npm run dev --prefix apps/api

# PocketBase only
npm run dev --prefix apps/pocketbase
```

## Production Build

### Build the application
```bash
npm run build
```

### Start in production mode
```bash
npm start
```

This starts the API and PocketBase services. The frontend is served as static files.

## Database Management

### PocketBase Migrations

The project includes database migrations for setting up collections:
- Users (with roles)
- Hostels
- Rooms
- Bookings
- Reviews
- Wishlists

### Admin Setup

Default admin users are created via migrations:
- admin@mangalmaya.com
- user@mangalmaya.com

Access the PocketBase admin panel at `http://localhost:8090/_/` to manage data.

## API Endpoints

The Express API provides endpoints for:
- Authentication
- Hostel and room data
- Booking management
- Review handling

Base URL: `http://localhost:8090` (PocketBase API) or custom API routes.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `npm run lint`
5. Test your changes
6. Submit a pull request

## License

This project is licensed under the terms specified in the LICENSE file.

## Support

For questions or issues, please open an issue on the GitHub repository.