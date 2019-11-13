#!/usr/bin/env node

const path   = require('path');
const dotenv = require('dotenv');
const Logger = require('./utils/Logger');

// env
dotenv.config({ path: path.resolve(process.cwd(), 'backend/.env')});
process.env.ORIGINS = require('./origins.json')

// router
Logger.log('Starting server...')
require('./router')