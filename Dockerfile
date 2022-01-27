FROM ubuntu:16.04
RUN apt update \
    && apt-get install -y curl vim wget gcc g++ make \
    && curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -\
    && apt-get install -y nodejs \
    && wget "https://github.com/yarnpkg/yarn/releases/download/v1.22.11/yarn_1.22.11_all.deb" \
    && dpkg -i yarn_1.22.11_all.deb \
    && rm yarn_1.22.11_all.deb \
    && apt install -y openjdk-8-jdk
WORKDIR /app
COPY . /app
RUN chmod +x gradlew && ./gradlew jar
EXPOSE 8081
