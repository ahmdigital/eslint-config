FROM node:10.22.1

WORKDIR /root/app/

# Envs
ENV TZ=Australia/Melbourne

# Run
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt-get update \
  && apt-get install -y jq

# Args
ARG NPM_TOKEN_AHM

# Secure NPM Token
RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN_AHM" > ~/.npmrc

COPY package.json .
COPY package-lock.json .

RUN npm i -g npm@latest
RUN npm i --quiet
RUN rm -f .npmrc

# Files
COPY .eslintrc.js .
COPY global-config.js .
COPY react-config.js .
COPY ts-config.js .
COPY index.js .

# Frequently changed files/folders
COPY .git ./.git