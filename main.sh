#!/bin/bash

export GIT_REPO_URL = "$GIT_REPOSITORY_URL"

git clone "$GIT_REPO_URL"  /home/app/optput

exec node script.js