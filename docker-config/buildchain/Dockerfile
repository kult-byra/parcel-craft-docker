FROM node:12

RUN apt-get update && apt-get install -y apt-transport-https \
    && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt-get update \
    && apt-get install -y yarn

WORKDIR /project

COPY ./docker-config/buildchain/package.json package.json

COPY ./docker-config/buildchain/postcss.config.js postcss.config.js

COPY ./docker-config/buildchain/tailwind.config.js tailwind.config.js

COPY ./docker-config/buildchain/stylelint.config.js stylelint.config.js

COPY --chown=www-data:www-data ./src/web ./src/web

RUN yarn install

RUN ls
RUN cd . 
RUN ls

RUN yarn build