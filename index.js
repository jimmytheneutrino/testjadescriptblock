var jade = require('jade');
var fs = require('fs');

var html = jade.renderFile('test.jade');

fs.writeFileSync('test.html', html);
