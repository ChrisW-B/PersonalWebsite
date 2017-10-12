#! /bin/bash
set -e # exit w/ non-zero if there's a failure
yarn lint:js
yarn lint:css
# yarn test
yarn build:server
yarn build:client
exit 0
