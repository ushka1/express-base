# Express Ts-Node Base

## Description

This is a base project for a backend application. It includes a basic structure and some useful tools to start a new project.

## Setup

1. Run `npm install` to install the dependencies.
1. Copy and rename the `.env.example` file to `.env` and set the environment variables.
1. Run `npm run dev` to start the development server.

## Docker

1. `docker build --build-arg "PORT=8080" -t ushka1/express-ts-node-base .`
1. `docker run -p 8080:8080 ushka1/express-ts-node-base`

## Features

- TypeScript
- Express.js
- SwaggerJSDoc
- Winston
- Jest + Supertest
- Eslint
- Nodemon
- Docker
