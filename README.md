## forum-system backend

This is the backend server for the forum system application. The forum sytem is designed to facilitate discussion through threads and replies.
Here is the link for front-end repo: https://github.com/nugrezo/forum-system-client

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Getting Started

### Prerequisites

- Node.js: Ensure that Node.js is installed on your machine. You can download it from [https://nodejs.org/](https://nodejs.org/).

### Installation

1. Clone the repository:
   git clone https://github.com/nugrezo/forum-system-backend.git

cd forum-system-backend

2. Install dependencies:

npm install

Set up environment variables:

Create a .env file in the root directory and add the following:

PORT=3000

3. Start the server:

npm start

## Usage

The server provides API endpoints for creating threads, replies, and user authentication.

Ensure that the frontend application is configured to communicate with this backend.

The backend application was deployed to Heroku and currently the front-end application is hosted by Heroku.

## API Endpoints

**POST /api/create/thread:** Create a new thread.

**POST /api/create/reply:** Create a new reply.

**POST /api/register:** Register a new user.

**POST /api/:** Log in a user.

**POST /api/thread/replies:** Get replies for a specific thread.

**POST /api/thread/likes/:threadId:** Get the number of likes for a thread.

**POST /api/thread/like:** Add a like to a thread.

For detailed documentation on each endpoint, refer to the source code or API documentation.

## Contributing

Contributions are welcome! If you find a bug or have suggestions for improvements, please open an issue or create a pull request.
