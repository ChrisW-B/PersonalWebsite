#! /bin/bash
{
  if [ -d "./public/build" ]; then
      yarn cleanup
  fi
  git pull
  yarn forceDev
  yarn build
} > update.log 2>&1
