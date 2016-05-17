var fs = require('fs');
var yargs = require('yargs').argv;
var _ = require('underscore');
var split = require('split');

var keys;

if(yargs.i && yargs.o) {
	readFile(yargs.i, (yargs.h == true));
}
else {
	console.log("Expected --i=\<inputFile.txt\> --o=\<inputFile.txt\> --h\<optional use header flag\>");
}

function readFile(inPath, useHeader) {

	var index = 0;
	var outData = [];

	var readStream = fs.createReadStream(inPath)
		.pipe(split())
		.on('data', function (line) {

			line = line.toString().match(/[^\r\n\t' ']+/g);

			if(line){

				if(useHeader && index == 0){
					setHeaderRowAsKeys(line);
				}
				else if(useHeader) {
					// create an object with header row keys
					line = addKeys(line);
					outData.push(line);
				}
				else {
					// array, no keys
					outData.push(line);
				}

				index++;
			}
		});

	readStream.on('end', function () {
		writeFile(outData, yargs.o);
	});
}

function writeFile(data, path){
	var jsonOut = fs.createWriteStream(path);
	jsonOut.write(JSON.stringify(data));
	jsonOut.on('error', function(err) { console.log(err); });
	jsonOut.end();
	console.log("done!");
}

function setHeaderRowAsKeys(line){
	keys = line;
}

function addKeys(line){
	return _.object(keys, line);
}