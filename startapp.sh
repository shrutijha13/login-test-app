#!/bin/bash

docker build  -t shrutijha/login_test_app -f ./docker/Dockerfile .  

docker run -it -d -p 3000:3000 shrutijha/login_test_app 