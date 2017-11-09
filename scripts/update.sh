#! /bin/bash
{
  date
  git pull
  yarn
  yarn build:server
  yarn build:client
} > update.log 2>&1
