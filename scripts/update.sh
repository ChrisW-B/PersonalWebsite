#! /bin/bash
{
git pull
yarn
if [ -d "./public/build" ] && yarn cleanup
yarn build
} > update.log 2>&1