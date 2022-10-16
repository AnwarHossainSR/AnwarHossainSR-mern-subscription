FROM node:16
WORKDIR /cbt-front-end
COPY . .
RUN yarn install
EXPOSE 6006
CMD ["yarn", "storybook"]
