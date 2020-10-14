var http = require('http');
var convert = require('./json-to-go');
var fs = require('fs');
var format = require('./gofmt')

var test1 = JSON.stringify(JSON.parse(fs.readFileSync('sample.json')));
var data1 = convert(test1, "", false);
var finalOutput = data1.go;
if (typeof gofmt === 'function')
				finalOutput = gofmt(data1.go);


console.log(data1);
console.log(finalOutput);