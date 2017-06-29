#!/usr/bin/env bash

BUILD_DIR=build
DIST_DIR=dist

pushd . >/dev/null

cd `dirname $0`/../..

echo -n "Building jAlkaMetri client in"
pwd

npm run build

echo "Deploying to ${DIST_DIR}"
rm -rf ${DIST_DIR}
mkdir -p ${DIST_DIR}
mv ${BUILD_DIR}/* ${DIST_DIR}

echo "Client deployed"

popd >/dev/null
