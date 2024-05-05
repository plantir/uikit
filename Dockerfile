#add some comment
FROM node:20 AS build

WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

FROM node:20-alpine AS deploy-node

WORKDIR /app
RUN rm -rf ./*
COPY --from=build /app/package.json .
COPY --from=build /app/dist .
RUN yarn --prod
EXPOSE 3000
CMD ["node","index.js"]