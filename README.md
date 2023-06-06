# How to run
`npm run start`

# Endpoints
`GET: /users/:id`: Get user by id
`POST: /users`: Create user
`GET: /users/:id/tasks`: Get all user tasks
`POST: /users/:id/tasks`: Create a user task
`DELETE: /users/:id/tasks/:tid`: Delete task from user by id
`PATCH: /users/:id/tasks/:tid`: Update task from user by id
`GET: /users/:id/tasks?done=true`: Get all incompleted tasks from user by id

# Definitions

- src: This is the root directory for your source code.
- controllers: Contains the controller files responsible for handling HTTP requests and responses.
- middleware: Contains middleware functions that can be used to intercept and modify requests and responses.
- models: Contains the data models or schemas for your application.
- routes: Contains the route files that define the API endpoints and map them to the corresponding controller methods.
- services: Contains service files that encapsulate the business logic and interact with the models or external services.
- index.ts: This is the entry point of your application where you set up the Express server, configure middleware, and define routes.
- tsconfig.json: The TypeScript configuration file that specifies the compiler options for your project.
- package.json: The package configuration file that manages project dependencies and scripts.