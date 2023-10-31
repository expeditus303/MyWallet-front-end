FROM node:alpine AS build

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM nginx:alpine

#deletar configuração padrão nginx
RUN rm /etc/nginx/conf.d/default.conf

#copiar nova configuração (arquivo nginx.conf que criei)
COPY nginx/nginx.conf /etc/nginx/conf.d

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]


