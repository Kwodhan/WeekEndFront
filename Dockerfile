FROM node:latest
# to be able to use --user, node need to write
# data to $HOME, but using root will break that possibility, so
# use /project instead



EXPOSE 9000 35729

# Define environment variable
# Set the working directory to /app
WORKDIR /
# Copy the current directory contents into the container at /app
ADD WeekEndFront /


RUN set -ex;\
    apt-get update && apt-get install -y ruby-compass; \
    npm install -g grunt-cli bower yo generator-karma generator-angular wiredep;

CMD npm install ; bower install --force --allow-root ; grunt serve

