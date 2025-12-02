# Consulting Agency Backend

This is the backend for a consulting agency website.

## Setup

1. Clone the repository: `git clone https://github.com/your-username/consulting-agency-backend.git`
2. Install dependencies: `npm install`
3. Create a PostgreSQL database and add the connection URL to the `.env` file
4. Run the migrations: `npx prisma migrate dev`
5. Start the server: `npm start`

## API Endpoints

### GET /api/services

Retrieve a list of consulting services.

### GET /api/about

Retrieve information about the agency's team and mission.

### POST /api/contact

Send a contact message to the agency.

### POST /api/login

Authenticate a user and return a token.

### GET /api/dashboard

Retrieve a user's dashboard information.

### GET /api/projects

Retrieve a list of a user's projects.

### POST /api/projects

Create a new project for a user.

### PUT /api/projects/:id

Update a user's project.

### DELETE /api/projects/:id

Delete a user's project.