#! /bin/bash
{
  date
  git pull
  npm ci
  npm run build:server
  npm run build:client
} > update.log 2>&1
