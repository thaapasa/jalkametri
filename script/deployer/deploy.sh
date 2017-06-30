#!/usr/bin/env bash

# This script is run by the script/deploy.sh script at pomeranssi.fi to build and deploy jAlkaMetri.

pushd . >/dev/null

function die {
    echo "Error: $1"
    popd >/dev/null
    exit -1
}

cd `dirname $0`/../..

echo -n "Updating to new jAlkaMetri version in "
pwd
git pull || die "Could not update jAlkaMetri sources"

echo "Installing dependencies"
npm install || die "Could not install dependencies"

echo "Building and deploying client"
./script/deployer/deploy-client.sh || die "Could not deploy client"

echo "jAlkaMetri build complete"

popd >/dev/null
