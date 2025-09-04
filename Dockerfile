# Use the official Node.js 22-slim image
FROM node:22-slim

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application's source code
COPY . .

# Tell Docker that the container listens on port 5173
EXPOSE 5173

# --- IMPORTANT ---
# To make your dev server accessible, you must modify your package.json.
# Change your "dev" script to: "dev": "vite --host 0.0.0.0"
CMD ["npm", "run", "dev"]