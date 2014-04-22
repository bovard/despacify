#!/usr/bin/env node

if( !process.env.NODE_ENV )  {
    process.env.NODE_ENV = 'test';
}

var path = require('path');

require(path.join(__dirname, '../src/main.js'));
