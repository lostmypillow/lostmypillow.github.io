FROM node:lts-slim as base
ARG PORT=3000
ENV NODE_ENV=production
WORKDIR /src
FROM base as build

COPY --link package.json pnpm-lock.yaml ./
RUN corepack enable
RUN pnpm i
COPY --link . .
RUN pnpm exec nuxi generate
RUN pnpm prune

FROM base

ENV PORT=$PORT

COPY --from=build /src/.output /src/.output
# Optional, only needed if you rely on unbundled dependencies
# COPY --from=build /src/node_modules /src/node_modules

CMD [ "npx", "serve", ".output/public" ]