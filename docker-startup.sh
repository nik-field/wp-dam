#!/bin/sh

openssl rand -base64 20 | docker secret create mysql_password
openssl rand -base64 20 | docker secret create mysql_root_password