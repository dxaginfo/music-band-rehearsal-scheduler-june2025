# Rehearsal Scheduler

A web application for automatically scheduling band rehearsals, sending reminders, tracking attendance, and optimizing practice time.

![Rehearsal Scheduler Banner](https://i.imgur.com/placeholder.jpg)

## 🎵 Overview

The Rehearsal Scheduler is designed to help music bands and ensembles efficiently schedule and manage rehearsals. The app automatically suggests optimal rehearsal times based on member availability, sends reminders, tracks attendance, and provides a collaborative platform for planning and organizing practice sessions.

## ✨ Features

- **Smart Scheduling**: Automatically suggests optimal rehearsal times based on member availability
- **Multi-band Support**: Manage multiple bands or ensembles from a single account
- **Attendance Tracking**: Record and analyze attendance patterns to improve participation
- **Setlist Management**: Create, share, and track rehearsal setlists and song progress
- **Calendar Integration**: Sync with Google, Apple, and Outlook calendars
- **Notifications**: Automated email, push, and SMS reminders
- **Communication Hub**: In-app messaging and announcements for band members
- **Analytics Dashboard**: Insights into rehearsal efficiency and member participation

## 🛠️ Technology Stack

### Frontend
- React.js with TypeScript
- Redux for state management
- Material-UI component library
- FullCalendar.js for calendar views
- Formik with Yup for form validation

### Backend
- Node.js with Express
- RESTful API with OpenAPI specification
- JWT authentication
- PostgreSQL database with Prisma ORM
- Redis for caching

### Infrastructure
- AWS for hosting
- Docker for containerization
- GitHub Actions for CI/CD
- Firebase Cloud Messaging for push notifications

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- PostgreSQL (v14+)
- Redis (v6+)

### Installation

1. Clone the repository
```bash
git clone https://github.com/dxaginfo/music-band-rehearsal-scheduler-june2025.git
cd music-band-rehearsal-scheduler-june2025
```

2. Install dependencies
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Set up environment variables
```bash
# In the server directory, create a .env file
cp .env.example .env
# Edit the .env file with your database and other configuration details
```

4. Initialize the database
```bash
cd server
npx prisma migrate dev
```

5. Start the development servers
```bash
# Start the backend server
cd server
npm run dev

# In a new terminal, start the frontend server
cd client
npm start
```

6. Open your browser and navigate to `http://localhost:3000`

## 📱 Mobile Responsiveness

The application is designed to be fully responsive and works seamlessly on:
- Desktop browsers
- Tablets
- Mobile phones

## 🔒 Security Features

- HTTPS for all communications
- JWT with short expiration and refresh tokens
- Password hashing with bcrypt
- Rate limiting to prevent brute force attacks
- Input validation and sanitization
- Regular security audits

## 🌐 API Documentation

API documentation is available at `/api/docs` when running the server locally, or at `https://api.rehearsal-scheduler.com/docs` in production.

## 🔄 Integration Capabilities

The application can integrate with:
- Google Calendar, Apple Calendar, Outlook
- Spotify (for setlists and song references)
- Dropbox/Google Drive (for sharing music files)
- Slack/Discord (for notifications)

## 🧪 Testing

```bash
# Run backend tests
cd server
npm test

# Run frontend tests
cd client
npm test

# Run end-to-end tests
npm run test:e2e
```

## 📂 Project Structure

```
├── client/                 # Frontend React application
│   ├── public/             # Public assets
│   ├── src/                # Source files
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API service calls
│   │   ├── store/          # Redux store configuration
│   │   └── utils/          # Utility functions
│   └── tests/              # Frontend tests
│
├── server/                 # Backend Node.js application
│   ├── src/                # Source files
│   │   ├── api/            # API routes
│   │   ├── config/         # Configuration files
│   │   ├── controllers/    # Request handlers
│   │   ├── models/         # Database models
│   │   ├── services/       # Business logic
│   │   └── utils/          # Utility functions
│   ├── prisma/             # Prisma schema and migrations
│   └── tests/              # Backend tests
│
├── docs/                   # Documentation files
├── docker/                 # Docker configuration
└── scripts/                # Utility scripts
```

## 📊 Database Schema

The application uses a PostgreSQL database with the following core tables:
- Users
- UserProfiles
- Bands
- BandMembers
- Rehearsals
- MemberAvailability
- Attendance
- Songs
- Setlists

For a complete schema, see [database-schema.md](docs/database-schema.md).

## 🤝 Contributing

Contributions are welcome! Please check out our [contribution guidelines](CONTRIBUTING.md) first.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [FullCalendar](https://fullcalendar.io/) for the calendar interface
- [Material-UI](https://mui.com/) for the UI components
- [Express](https://expressjs.com/) for the backend framework
- [Prisma](https://www.prisma.io/) for the database ORM

## 📬 Contact

For questions or support, please email [support@rehearsal-scheduler.com](mailto:support@rehearsal-scheduler.com) or open an issue on GitHub.