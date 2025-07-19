# Base image with Node.js
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json first (for Docker caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app source
COPY . .

# Build the React app
RUN npm run build

# Install Express (ensure you have server.js)
RUN npm install express

# Expose port Cloud Run expects
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]
