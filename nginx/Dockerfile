FROM nginx:1.21-alpine

# RUN ln -sf /dev/stdout /var/log/nginx/access.log && ln -sf /dev/stderr /var/log/nginx/error.log

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

WORKDIR /home/app/backend/staticfiles/

EXPOSE 80

# CMD ["nginx-debug", "-g", "daemon off;"]