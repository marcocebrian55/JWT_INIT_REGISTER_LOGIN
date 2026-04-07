# JWT Authentication App 🔐

Full Stack authentication application built with React (frontend) 
and Flask (backend), implementing JWT-based login and registration 
with protected private routes.

## Technologies
### Frontend
- React + Vite
- React Router DOM
- Bootstrap

### Backend
- Python / Flask
- Flask-JWT-Extended
- Flask-Bcrypt (password encryption)
- SQLAlchemy + PostgreSQL

## Features
- User registration with encrypted password
- Login with JWT token generation
- Protected private routes (token required)
- Persistent session via localStorage
- Full frontend-backend integration

## API Endpoints
| Method | Route | Description | Auth required |
|--------|-------|-------------|---------------|
| POST | /api/register | Register a new user | No |
| POST | /api/login | Login and get JWT token | No |
| GET | /api/profile | Get authenticated user profile | Yes |
| GET | /api/users | Get all users | No |

## Local Installation
### Backend
1. Install dependencies: `pipenv install`
2. Run migrations: `pipenv run migrate && pipenv run upgrade`
3. Start server: `pipenv run start`

### Frontend
1. Install dependencies: `npm install`
2. Create `.env` file with `VITE_BACKEND_URL=http://localhost:3000`
3. Start app: `npm run dev`

## Author
Marco Cebrian — [@marcocebrian55](https://github.com/marcocebrian55)
