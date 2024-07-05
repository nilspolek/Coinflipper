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

FROM nginx:latest
COPY ./nginx/* /etc/nginx/
COPY --from=build /app/dist/untitled/browser /usr/share/nginx/html
EXPOSE 80
