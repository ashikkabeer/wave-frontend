# Use official Node.js image as base
FROM node:latest

# Set working directory inside the container
WORKDIR /frontend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Update polished package to the latest version
RUN npm install polished@latest
# Copy the rest of the application code
COPY . .

# Build Next.js app
RUN npm run build

# Expose the port Next.js runs on
EXPOSE 3001

# Command to run the app
CMD ["npm", "start"]
