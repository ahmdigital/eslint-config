FROM public.ecr.aws/docker/library/node:18

WORKDIR /root/app/

RUN apt-get update \
  && apt-get install -y jq

COPY package.json package-lock.json ./
RUN npm ci --quiet --no-optional && npm cache clean --force

COPY .eslintrc.js .
COPY global-config.js .
COPY react-config.js .
COPY ts-config.js .
COPY index.js .

COPY .git ./.git
