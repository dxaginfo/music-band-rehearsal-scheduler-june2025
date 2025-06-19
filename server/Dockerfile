FROM node:18-alpine

WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the application code
COPY . .

# Run Prisma migrations
RUN npx prisma generate

# Expose port 5000
EXPOSE 5000

# Set the user to node (for security)
USER node

# Start the application
CMD ["node", "src/index.js"]