# Python Server

This project contains a FastAPI server implemented in Python. It provides two routes for managing a task list.

## Project Structure

The project has the following files and directories:

- `python-server/src/main.py`: This file contains the implementation of the FastAPI server with two routes. It handles adding a task to a list and retrieving the list.

- `python-server/src/__init__.py`: This file is an empty file that marks the `src` directory as a Python package.

- `python-server/requirements.txt`: This file lists the dependencies required for the FastAPI server and other dependencies.

- `python-server/Dockerfile`: This file is used to build a Docker image for the FastAPI server. It specifies the base image, copies the source code into the image, installs the dependencies, and sets the command to run the server.

- `docker-compose.yml`: This file is used to define and run multi-container Docker applications. It specifies the services to run, their configurations, and any dependencies between them.

## Getting Started

To run the FastAPI server using Docker, follow these steps:

- Build and start the Docker containers by running the following command:

  ```shell
  docker compose up
  ```

  This command will build the Docker image for the FastAPI server and start the containers defined in the `docker-compose.yml` file.

- The FastAPI server should now be running. You can access at port `8000`.

## API Routes

The FastAPI server provides the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.

- `GET /tasks`: Retrieves the task list.
  
# Node Server

This project also includes a Node.js server implemented with Express. It provides similar functionality for managing a task list.

## Project Structure

The Node.js server has the following files and directories:

- `node-server/src/index.js`: Contains the Express server implementation with routes for adding and retrieving tasks.
- `node-server/src/__init__.js`: (Optional) Used for module initialization if needed.
- `node-server/package.json`: Lists dependencies and scripts for the Node.js server.
- `node-server/Dockerfile`: Builds a Docker image for the Node.js server.
- `docker-compose.yml`: Defines both the Python and Node.js services.

## Getting Started

To run the Node.js server using Docker:

- Build and start the containers:

  ```shell
  docker compose up
  ```

- The Node.js server will be accessible at port `8001` by default.

## API Routes

The Node.js server provides the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.
- `GET /tasks`: Retrieves the task list.

# Anythink Market

## Startup Instructions

### Running Both Servers with Docker Compose

1. **Build and start both servers:**

   ```bash
   docker-compose up --build
   ```

   - The **Python server** will be available at [http://localhost:8000](http://localhost:8000)
   - The **Node.js server** will be available at [http://localhost:8001](http://localhost:8001)

---

### Running Servers Individually

#### Python Server

1. Navigate to the Python server directory:

   ```bash
   cd python-server
   ```

2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Start the server:

   ```bash
   python src/main.py
   ```

   The server will run on [http://localhost:8000](http://localhost:8000)

---

#### Node.js Express Server

1. Navigate to the Node server directory:

   ```bash
   cd node-server/my-express-app
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Start the server with nodemon:

   ```bash
   yarn start
   ```

   The server will run on [http://localhost:8001](http://localhost:8001)