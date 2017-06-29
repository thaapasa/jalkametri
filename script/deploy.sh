#!/usr/bin/env bash

# Call this script from your local development machine (or IDE) to trigger automatic deploy

ssh deployer@pomeranssi.fi "bash --login -c 'cd ~/jalkametri && script/deployer/deploy.sh"
