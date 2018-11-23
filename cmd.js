#!/usr/bin/env node

const yargs = require('yargs');
const serverModule = require('./server.js');

yargs
  .usage('$0 <cmd> [args]')
  .command('server [iterval, timeout]', 'launch server with some parameters', (yargs) => {
    yargs
      .option('interval', {
        alias: 'i',
        describe: 'set interval',
        type: 'number',
        default: 1000,
      })
      .option('timeout', {
          alias: 't',
          describe: 'provide a path to file',
          type: 'number',
          default: 10000,
      })
  }, function (argv) {
      console.log('Server started at port 8080');
      serverModule(yargs);
  })
  .help()
  .argv