FROM python:latest

RUN mkdir -p /home/app

# set work directory
ENV HOME=/home/app
ENV APP_HOME=/home/app/backend
RUN mkdir $APP_HOME
# RUN mkdir $APP_HOME/staticfiles
WORKDIR $APP_HOME
# WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
RUN pip install --upgrade pip
COPY ./backend/requirements.txt .
RUN pip install -r requirements.txt

# copy project
COPY . .