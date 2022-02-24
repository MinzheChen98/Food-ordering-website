FROM python:alpine

RUN mkdir -p /home/app

ENV DEBUG=0

# Install OpenSSH and set the password for root to "Docker!". In this example, "apk add" is the install instruction for an Alpine Linux-based image.
RUN apk add openssh \
     && echo "root:Docker!" | chpasswd 

# Copy the sshd_config file to the /etc/ssh/ directory
COPY sshd_config /etc/ssh/

# Copy and configure the ssh_setup file
RUN mkdir -p /tmp
COPY ssh_setup.sh /tmp
RUN chmod +x /tmp/ssh_setup.sh \
    && (sleep 1;/tmp/ssh_setup.sh 2>&1 > /dev/null)


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

EXPOSE 8000 2222

RUN /usr/sbin/sshd

RUN ls -lah *

CMD ["gunicorn", "backend.wsgi:application", "--bind", "0.0.0.0:8000", "--pythonpath", "./backend_project/"]