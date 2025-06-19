# My Express App

This is a simple Express server application that listens on port 8001. 

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate into the project directory:
   ```
   cd my-express-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Server

To run the server with automatic restarts on code changes, use Nodemon:

```
npm run start
```

The server will be running on `http://localhost:8001`.

### Docker

To run the application in a Docker container, build the Docker image and run it:

1. Build the Docker image:
   ```
   docker build -t my-express-app .
   ```
2. Run the Docker container:
   ```
   docker run -p 8001:8001 my-express-app
   ```

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.