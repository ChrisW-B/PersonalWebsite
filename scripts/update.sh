#! /bin/bash
{
  git pull
  yarn
  if [ -d "./public/build" ]
  then
      yarn cleanup
  fi
  yarn build
} > update.log 2>&1
