FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the code
COPY . .

# Build the app for production
RUN npm run build

# Install serve to run the application
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Command to run the app
CMD ["serve", "-s", "build", "-l", "3000"]
