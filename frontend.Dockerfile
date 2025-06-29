# Use Node.js base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy app files
COPY . .

# Install dependencies
RUN npm install

# Build the app
RUN npm run build

# Use Nginx to serve the build
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

