#! /bin/bash
set -ex

docker rm -f $(docker ps -a | awk -F' ' '{ print $1 }')
docker volume rm -f $(docker volume ls | awk -F' ' '{ print $2 }')

# docker rmi -f $(docker image ls | awk -F' ' '{ print $3 }')

docker-compose up