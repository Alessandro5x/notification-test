# Notification test

## Description

This is a notification system that allows sending messages to users based on their category subscriptions. Notifications can be sent via SMS, email, or push notification. The project consists of a backend developed in Node.js and a frontend in React.

## Features

- Sending notifications via SMS, email, and push.
- Logging sent notifications.
- Interface for sending notifications.
- Viewing notification log history.

## Technologies Used

### Backend

- Node.js
- Express.js
- Mongoose
- MongoDB
- dotenv

### Frontend

- React
- Axios
- Styled-components

## Prerequisites

- Node.js (version 14 or higher)
- MongoDB

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/notification-system.git
cd notification-test
cd backend
npm install # to install all necessary dependecies
npm start # start the backend server:
# backend is now running
cd ..
cd frontend
npm install # to install all necessary dependecies
npm start # start the backend server:
# backend is now running
```

### Usage
Open your browser and go to http://localhost:3001.
Fill out the form to send a notification.
View the log history on the interface.

### Testing
Backend
```bash
cd backend
npm test
```