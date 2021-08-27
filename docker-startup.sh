#!/bin/zsh
mkdir -p $(cd ../ && pwd)/secrets/ && touch $(cd ../ && pwd)/secrets/mysql_password.secret
mkdir -p $(cd ../ && pwd)/secrets/ && touch $(cd ../ && pwd)/secrets/mysql_root_password.secret
openssl rand -out $(cd ../ && pwd)/secrets/mysql_password.secret -base64 20
openssl rand -out $(cd ../ && pwd)/secrets/mysql_root_password.secret -base64 20
docker-compose up
