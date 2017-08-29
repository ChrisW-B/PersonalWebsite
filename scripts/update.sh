#! /bin/bash
{
  local NODE_ENV='development'
  if [ -d "./public/build" ]; then
      yarn cleanup
  fi
  git pull
  yarn
  yarn build
} > update.log 2>&1
