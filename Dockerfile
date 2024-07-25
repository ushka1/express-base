FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

ENV PORT=8888
EXPOSE 8888

CMD ["npm", "start"]