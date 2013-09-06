#!/usr/bin/env node

var c = require('commander'),
    md = require('marked'),
    ejs = require('ejs'),
    fs = require('fs'),
    through = require('through'),
    concat = require('concat-stream'),
    isCli = (require.main === module);

function Geiger(options) {
  if (!(this instanceof Geiger)) return new Geiger(options);
  this.settings = options || {};

  return this;
}

if (isCli) {
  c
    .version('0.0.0')
    .usage('[options] outputdir')
    .option('d, --dir <dir>', 'use <dir> instead of cwd')
    .option('-w, --watch', 'watch for changes and compile automatically')
    .parse(process.argv);

  if (!c.args.length) c.help();

}
