#!/usr/bin/env bash

pushd . >/dev/null

cd `dirname $0`/../..

echo -n "Updating to new jAlkaMetri version in "
pwd
git pull

echo "Installing dependencies"
npm install

echo "Building and deploying client"
./script/deployer/deploy-client.sh

echo "jAlkaMetri build complete"

popd >/dev/null
