var c = require('commander'),
    md = require('marked'),
    ejs = require('ejs'),
    fs = require('fs'),
    through = require('through'),
    concat = require('concat-stream'),
    isCli = (require.main === module);

if (isCli) {
  c
    .version('0.0.0');
}
