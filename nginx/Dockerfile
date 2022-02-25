FROM nginx:1.21-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

RUN mkdir -p /home/app/backend/staticfiles/

WORKDIR /home/app/backend/staticfiles/

EXPOSE 80
