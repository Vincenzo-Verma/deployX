FROM ubuntu:focal

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get updgrade -y
RUN apt-get install -y \
    nodejs \
    git

WORKDIR /home/app

COPY main.sh main.sh

ENTRYPOINT [ "/home/app/main.sh" ]