# URL Shortener

A modern, scalable URL shortener service built with Node.js, Express, TypeScript, and Supabase.

## Features

- 🔗 Create short URLs from long URLs
- 📊 Track click analytics for each shortened URL
- 🏥 Health check endpoint
- 🎨 Colored console logging for development
- 🔒 Environment variable validation
- 📝 TypeScript for type safety
- 🚀 Hot reloading with nodemon

## Tech Stack

- **Runtime**: `Node.js`
- **Framework**: `Express.js`
- **Language**: `TypeScript`
- **Database**: `Supabase`
- **Development Tools**:
  - `nodemon` for hot reloading
  - `dotenv` for environment management

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Supabase account and project

## Installation

1. Clone the repository:

```bash
git clone git@github.com:jameslreyes/url-shortener.git
cd url-shortener
```

2. Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
NODE_ENV='development'
PORT='3000'
SUPABASE_URL='your_supabase_url'
SUPABASE_ANON_KEY='your_supabase_anon_key'
```

## Usage

1. Start the development server:

```bash
npm run dev
```

2. The server will start on the specified port (default: 3000)

## API Endpoints

### Create Short URL

```http
POST /shorten
Content-Type: application/json

{
  "longUrl": "https://example.com/very/long/url"
}
```

Response:

```json
"http://localhost:3000/abc123"
```

### Redirect to Long URL

```http
GET /:shortCode
```

Response: Redirects to the original URL

### Health Check

```http
GET /health
```

Response:

```json
{
  "status": "healthy",
  "timestamp": "2024-03-14T12:00:00.000Z",
  "version": "0.1.0"
}
```

## Development

The project uses `nodemon` for hot reloading during development. Any changes to TypeScript files in the `src` directory will automatically restart the server.

### Project Structure

```text
url-shortener
├─ src
│  ├─ config
│  │  ├─ env.ts                     # Environment configuration
│  │  └─ logger.ts                  # Custom logging setup
│  ├─ controllers
│  │  ├─ health.controller.ts       # Health check endpoint
│  │  ├─ shorten.controller.ts      # URL shortening logic
│  │  └─ _index.ts                  # Controller exports
│  ├─ helpers
│  │  ├─ env.ts                     # Environment validation
│  │  └─ index.ts                   # Utility functions
│  ├─ services
│  │  └─ supabase.service.ts        # Database operations
│  ├─ types
│  │  └─ Env.ts                     # TypeScript types
│  ├─ app.ts                        # Express app setup
│  └─ server.ts                     # Server entry point
├─ nodemon.json                     # Nodemon configuration
├─ package.json                     # Project dependencies
└─ tsconfig.json                    # TypeScript configuration
```
