#! /bin/bash
set -e

git pull
yarn
yarn cleanup
yarn build