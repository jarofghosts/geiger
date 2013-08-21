var c = require('commander'),
    md = require('marked'),
    ejs = require('ejs'),
    fs = require('fs'),
    through = require('through'),
    concat = require('concat-stream'),
    isCli = (require.main === module);

if (isCli) {
  c
    .version('0.0.0')
    .usage('[options] [srcdir] dstdir')
    .option('-w, --watch', 'watch srcdir for changes and compile automatically')
    .parse(process.argv);

  if (!c.args.length) c.help();

}
