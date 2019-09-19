# base image
FROM node:11

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN yarn install --silent

# copy source code 
ADD . /app

# start app
CMD ["yarn", "start"]
