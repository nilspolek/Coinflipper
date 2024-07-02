# Use the official Node.js image from the Docker Hub
FROM node:latest as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

RUN npm install -g @angular/cli

# Copy the rest of the application code
COPY . .

RUN ng build

# Use the official Python image from Docker Hub
FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /app

COPY --from=build /app/dist/untitled/browser /app

# Run a simple HTTP server on port 8000
CMD ["python", "-m", "http.server", "8000"]
