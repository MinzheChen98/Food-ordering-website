# FROM ubuntu:latest
FROM nginx:1.21-alpine

# RUN ln -sf /dev/stdout /var/log/nginx/access.log && ln -sf /dev/stderr /var/log/nginx/error.log

# RUN apt-get update && apt-get install -y nginx openssh-server

# RUN ls /etc/nginx/conf.d/

ENV NGINX_DIR="nginx"

# RUN mv /etc/nginx/nginx.conf /etc/nginx/nginx.conf.bak
RUN rm /etc/nginx/conf.d/default.conf
COPY $NGINX_DIR/nginx.conf /etc/nginx/conf.d

RUN apk add openssh

RUN echo "root:Docker!" | chpasswd

COPY $NGINX_DIR/sshd_config /etc/ssh/

RUN mkdir -p /tmp
COPY $NGINX_DIR/ssh_setup.sh /tmp
RUN chmod +x /tmp/ssh_setup.sh \
    && (sleep 1;/tmp/ssh_setup.sh)

EXPOSE 80 2222

COPY ${NGINX_DIR}/runssh.sh /docker-entrypoint.d
RUN ls -lah /docker-entrypoint.d
RUN chmod +x /docker-entrypoint.d/runssh.sh

# CMD ["/root/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]