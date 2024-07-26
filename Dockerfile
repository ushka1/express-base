# Base image for build
FROM node:20-alpine AS build

# Set workdir
WORKDIR /app
# Copy package files
COPY package*.json .
# Install dependencies
RUN npm install
# Copy project files
COPY . .

# Run tests
RUN npm run test

# Base image for release
FROM node:20-alpine AS release

# Set workdir
WORKDIR /app
# Copy build artifacts
COPY --from=build /app .
# Remove development dependencies
RUN npm prune --omit=dev

# Define build argument for port
ARG PORT=8080
# Set environment variable
ENV PORT=${PORT}
# Expose port
EXPOSE ${PORT}

# Start the app
CMD ["npm", "start"]