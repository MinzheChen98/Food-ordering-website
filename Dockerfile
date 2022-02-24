FROM python:latest

RUN mkdir -p /home/app

ENV DEBUG=0

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
COPY ./backend_project/requirements.txt .
RUN pip install -r requirements.txt

# copy project
COPY . .

RUN python backend_project/manage.py collectstatic --no-input --clear

EXPOSE 8000

RUN ls -lah *

CMD ["gunicorn", "backend.wsgi:application", "--bind", "0.0.0.0:8000", "--pythonpath", "./backend_project/"]