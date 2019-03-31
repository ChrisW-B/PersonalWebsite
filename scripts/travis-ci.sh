#! /bin/bash
set -e # exit w/ non-zero if there's a failure
npm lint:js
npm lint:css
# npm test
npm build:client
npm build:server
exit 0
