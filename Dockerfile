FROM python:alpine

RUN mkdir -p /home/app

ENV DEBUG=0


# set work directory
ENV HOME=/home/app
WORKDIR $HOME
# copy project
COPY . .

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
RUN pip install -r backend/requirements.txt

RUN python backend/manage.py collectstatic --no-input --clear

EXPOSE 8000

RUN echo "--------------------"

CMD ["gunicorn", "backend.wsgi:application", "--bind", "0.0.0.0:8000", "--pythonpath", "./backend/"]