#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';
import diff from '../difflogic.js';

const program = new Command();
program.version('0.0.1');

program
  .option('-f, --format [type]', 'output format')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => diff(filepath1, filepath2));

program.parse(process.argv);
