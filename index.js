#!/usr/bin/env node

var c = require('commander'),
    md = require('marked'),
    ejs = require('ejs'),
    fs = require('fs'),
    path = require('path'),
    isCli = (require.main === module);

function Geiger(options) {
  if (!(this instanceof Geiger)) return new Geiger(options);
  options = options || {};
  var activeDir = options.dir ? path.normalize(options.dir) : process.cwd(),
      config = null;
  if (fs.existsSync(activeDir + '/.geiger.json')) config = require(activeDir + '/.geiger.json');
  this.settings = {
    dir: activeDir,
    config: config
  };

  return this;
}

Geiger.prototype.compile = function () {
};

Geiger.prototype.watch = function () {
};

module.exports.Geiger = Geiger;

if (isCli) {
  c
    .version('0.0.0')
    .usage('[options]')
    .option('d, --dir <dir>', 'use <dir> instead of cwd')
    .option('-w, --watch', 'watch for changes and compile automatically')
    .parse(process.argv);

  if (!c.args.length) c.help();

}
