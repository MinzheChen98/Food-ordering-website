# compile and build REACT

FROM node:alpine

RUN mkdir -p /home/app
WORKDIR /home/app

COPY . .

RUN ls -lah
RUN ls -lah frontend
WORKDIR /home/app/frontend
RUN ls -lah
RUN npm install
RUN npm run build --if-present
RUN ls -lah 
RUN ls -lah build


# multi stage build
FROM python:alpine

RUN mkdir -p /home/app

ENV DEBUG=0


# set work directory
ENV HOME=/home/app
WORKDIR $HOME
# copy project
COPY . .
COPY --from=0 /home/app/frontend/build /home/app/frontend/build

RUN ls -lah
# RUN mkdir $APP_HOME
# RUN mkdir $APP_HOME/staticfiles

# WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
RUN pip install --upgrade pip
# COPY ./backend/requirements.txt .
RUN ls -lah
RUN ls -lah frontend/
RUN ls -lah frontend/build
RUN pip install -r backend/requirements.txt

RUN python backend/manage.py makemigrations

RUN python backend/manage.py migrate

RUN python backend/manage.py collectstatic --no-input --clear

RUN apk add openssh

RUN echo "root:Docker!" | chpasswd

ENV NGINX_DIR="nginx"

COPY $NGINX_DIR/sshd_config /etc/ssh/

RUN mkdir -p /tmp
COPY $NGINX_DIR/ssh_setup.sh /tmp
RUN chmod +x /tmp/ssh_setup.sh \
    && (sleep 1;/tmp/ssh_setup.sh)

RUN ls -lah $HOME/*

EXPOSE 8000 2222

RUN echo "--------------------"

CMD ["gunicorn", "backend.wsgi:application", "--bind", "0.0.0.0:8000", "--pythonpath", "/home/app/backend/"]