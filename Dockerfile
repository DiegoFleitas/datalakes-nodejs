# Start from a Node.js 8.10.0 image due to compatibility requirements
# Note this version is no longer actively maintained, closest maintained version is 14.x (Fermium)
FROM node:8.10.0

# Define the working directory - provides a location for the application's source code
WORKDIR /app

# Commands to update the package list to use archived Jessie repositories, 
# ignore the "Valid Until" field in Release files, and install necessary packages.
# This ensures compatibility with older libraries and bypasses errors due to expired keys.
RUN echo "deb http://archive.debian.org/debian/ jessie main" > /etc/apt/sources.list \
    && echo "deb-src http://archive.debian.org/debian/ jessie main" >> /etc/apt/sources.list \
    && echo "Acquire::Check-Valid-Until false;" > /etc/apt/apt.conf.d/99jessie \
    && apt-get update && apt-get install -y --allow-unauthenticated \
    gcc \
    gfortran \
    libnetcdf-dev

# Copy the source code into the container
COPY . /app

# Install dependencies
RUN npm install

# Allow incoming connections to the application
EXPOSE 80

# Start the application
CMD ["npm", "start"]