FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
FROM base AS deps
RUN npm ci

# Development stage
FROM deps AS development
# Copy the rest of the code
COPY . .
# Expose port 3000
EXPOSE 3000
# Command to run the app in development mode
CMD ["npm", "start"]

# Build stage
FROM deps AS builder
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS production
WORKDIR /app
# Install serve to run the application
RUN npm install -g serve
# Copy built assets from builder stage
COPY --from=builder /app/build ./build
# Expose port 3000
EXPOSE 3000
# Command to run the app
CMD ["serve", "-s", "build", "-l", "3000"]
