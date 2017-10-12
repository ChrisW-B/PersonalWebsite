#! /bin/bash
{
  date
  git pull
  yarn
  yarn build:client
  yarn build:server
} > update.log 2>&1
