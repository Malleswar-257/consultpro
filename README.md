# consultpro

A modern, professional business consulting and agency website.

## Tech Stack

- **Frontend**: Next.js 14
- **Backend**: Node.js/Express + Prisma
- **Design**: Figma ([View Design](https://www.figma.com/design/dyF1kttLxX5lIepS4hs2bO/Business-Consulting-Website-UI-Template--Community-?node-id=0-1&t;=qeSSKsS8obfvLt2g-1))

## Project Structure

```
consultpro/
├── frontend/          # Frontend application
├── backend/           # Backend API
├── README.md          # This file
└── docker-compose.yml # Docker configuration (if applicable)
```

## Getting Started

### Prerequisites

- Node.js 18+ (for frontend)
- Python 3.11+ (for Python backends)
- Docker (optional, for containerized setup)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
# Follow backend-specific setup instructions in backend/README.md
```

## Features

- {'name': 'Responsive Design', 'description': 'The website will be fully responsive and work on all devices.'}
- {'name': 'Blog', 'description': 'The website will have a blog section where administrators can create and manage blog posts.'}
- {'name': 'Contact Form', 'description': 'The website will have a contact form that users can submit to get in touch with the agency.'}
- {'name': 'User Accounts', 'description': 'The website will allow users to create accounts and log in to access exclusive content.'}

## API Endpoints

- `GET /api/pages` - Retrieve a list of all pages
- `GET /api/pages/:id` - Retrieve a single page by ID
- `POST /api/pages` - Create a new page
- `PUT /api/pages/:id` - Update an existing page
- `DELETE /api/pages/:id` - Delete a page
- `GET /api/blog-posts` - Retrieve a list of all blog posts
- `GET /api/blog-posts/:id` - Retrieve a single blog post by ID
- `POST /api/blog-posts` - Create a new blog post
- `PUT /api/blog-posts/:id` - Update an existing blog post
- `DELETE /api/blog-posts/:id` - Delete a blog post

## License

MIT
