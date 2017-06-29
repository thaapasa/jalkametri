#!/usr/bin/env bash

# This script is run by the script/deploy.sh script at pomeranssi.fi to build and deploy jAlkaMetri.

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
