# Creating a multi-stage build
FROM node:20-alpine AS builder
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev git > /dev/null 2>&1
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
#Copy package-lock.json only if it exists
COPY package.json package-lock.json* ./
RUN npm install -g node-gyp
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install
ENV PATH=/opt/node_modules/.bin:$PATH
WORKDIR /opt/app
COPY . .
RUN npm run build

# Creating the final image
FROM node:20-alpine AS runner
RUN apk add --no-cache vips-dev
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY --from=builder /opt/node_modules ./node_modules
WORKDIR /opt/app
COPY --from=builder /opt/app ./
ENV PATH=/opt/node_modules/.bin:$PATH
RUN chown -R node:node /opt/app
USER node
EXPOSE 1337
ENV ADMIN_EMAIL=admin@example.com
ENV ADMIN_FIRSTNAME=John
ENV ADMIN_LASTNAME=Doe
# Before starting the server, creates an admin user or updates its credentials if a user already exists with this email
# --silent option is used to avoid leaking credentials in logs.
CMD npm run --silent strapi admin:create-user -- --firstname=$ADMIN_FIRSTNAME --lastname=$ADMIN_LASTNAME --email=$ADMIN_EMAIL --password=$ADMIN_PASSWORD ; (npm run --silent strapi admin:reset-user-password -- --email=$ADMIN_EMAIL --password=$ADMIN_PASSWORD && npm run develop)
