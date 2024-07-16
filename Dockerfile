# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Create variables for the env items
ARG CLOUDINARY_API_SECRET
ARG JWT_SECRET
ARG JWT_EXPIRES
ARG JWT_COOKIE_EXPIREs
ARG GOOGLE_API_KEY
ARG CLOUDINARY_CLOUD_NAME
ARG CLOUDINARY_API_KEY
ARG CLOUDINARY_API_SECRET

# Assign values to the variables
ENV MONGO_URI=$MONGO_URI
ENV JWT_SECRET=$JWT_SECRET
ENV JWT_EXPIRES=$JWT_EXPIRES
ENV JWT_COOKIE_EXPIREs=$JWT_COOKIE_EXPIREs
ENV GOOGLE_API_KEY=$GOOGLE_API_KEY
ENV CLOUDINARY_CLOUD_NAME=$CLOUDINARY_CLOUD_NAME
ENV CLOUDINARY_API_KEY=$CLOUDINARY_API_KEY
ENV CLOUDINARY_API_SECRET=$CLOUDINARY_API_SECRET

# Build the TypeScript code
RUN npm run build

# Set the working directory to the built files
WORKDIR /dist

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the application
CMD ["node", "index.js"]
