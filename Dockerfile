<<<<<<< HEAD
FROM nginx:alpine
COPY dist /usr/share/nginx/html
=======
# Use an official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Expose the backend port
EXPOSE 3001

# Start the server
CMD ["node", "server.js"]
>>>>>>> 9f42378 (Add backend folder with server.js and Dockerfile)

