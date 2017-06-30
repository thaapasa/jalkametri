#!/usr/bin/env bash

BUILD_DIR=build
DIST_DIR=dist

pushd . >/dev/null

function die {
    echo "Error: $1"
    popd >/dev/null
    exit -1
}

cd `dirname $0`/../..

echo -n "Building jAlkaMetri client in "
pwd

npm run build-client || die "Client build failed"

echo "Deploying to ${DIST_DIR}"
rm -rf ${DIST_DIR}
mkdir -p ${DIST_DIR} || die "Could not create distribution directory ${DIST_DIR}"
mv ${BUILD_DIR}/* ${DIST_DIR} || die "Could not copy files to distribution directory ${DIST_DIR}"

echo "Client deployed"

popd >/dev/null
