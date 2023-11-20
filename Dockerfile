# Создаем приложение
FROM node:alpine as builder
WORKDIR /application
COPY package.json package-lock.json ./
ENV CI=1
RUN npm ci

COPY . .
#RUN npm run build -- --prod --output-path=/dist
RUN npm run build --output-path=/dist

#update D-Bus config
ENV NO_AT_BRIDGE=1

# Развертываем приложение на Nginx
FROM nginx:alpine

# заменяем дефолтную страницу nginx соответствующей веб-приложению

#WORKDIR /var/www/html/app
#COPY --from=builder /application/dist .

#RUN chown -R www-data:www-data /var/www/html/app

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /application/dist /usr/share/nginx/html

#COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

# копируем nginx conf внутрь контейнера
#COPY frontend.conf /etc/nginx/conf.d/
COPY nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]
