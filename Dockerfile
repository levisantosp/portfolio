FROM oven/bun:1.3.14-alpine

WORKDIR /app

COPY package.json bun.lock /app/

RUN bun ci
COPY . .
RUN bun b

CMD [ "bun", "start" ]