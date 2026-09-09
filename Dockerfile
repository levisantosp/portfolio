FROM oven/bun:1.4.2-alpine

WORKDIR /app

COPY package.json bun.lock /app/

RUN bun ci
COPY . .
RUN bun b

CMD [ "bun", "start" ]