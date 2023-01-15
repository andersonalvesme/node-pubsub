#!/bin/bash

cd /home/node/app
npm install
npm run migration:run
npm run start
