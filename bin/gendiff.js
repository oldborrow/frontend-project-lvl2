#!/usr/bin/env node

const { program, option, help } = require('commander');
program.version('0.0.1');

program
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
program.parse(process.argv);

const options = program.opts();

