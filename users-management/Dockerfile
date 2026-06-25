#this comment starts the dockerfile for users-management service , image that alredy node js installed in version 20-alpine is used to keep the image size small and efficient. The working directory is set to /app, and the package.json files are copied to this directory. The npm install command is run to install the dependencies, and port 3000 is exposed for the application. Finally, the command to start the application is specified as "npm start".
FROM node:20-alpine

# sets  /app as the working directory inside the container
WORKDIR /app

# copies the package.json and package-lock.json first to take advantage of Docker's layer caching
COPY package*.json ./

# installs the dependencies defined in package.json
RUN npm install
# copies the rest of the application code to the working directory
COPY . .
# exposes port 3000 to allow external access to the application infrom docker that application will run on port 3000
EXPOSE 3000
# execute this command when the container starts, it will run the npm start script defined in package.json, which typically starts the application. If there are multiple commands, they should be separated by commas and enclosed in square brackets.
CMD ["node" , "app.js"] 