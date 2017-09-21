# text2json

Small CLI style node app to convert delimited `.txt` files into `.json`

## install

Install with npm: `npm install text-2-json`

## use

Run from command line, takes three args:

- `i`, the path of input txt file, e.g. "input/path/text.txt"
- `o`, the path of output json file, e.g. "output/path/result.json"
- `h`, an optional flag indicating whether or not to use the first row of the file as object keys.

Example:

`node index.js --i=test/test.txt --o=test/output.json --h`

Turns:

```
test max min direction
10 27.7 12.4 12
11 26.9 13.5 18
12 27.4 16.9 31
13 25.1 12.7 29
```

Into:

```javascript
[
	{
		"test": "10",
		"max": "27.7",
		"min": "12.4",
		"direction": "12"
	},
	{
		"test": "11",
		"max": "26.9",
		"min": "13.5",
		"direction": "18"
	},
	{
		"test": "12",
		"max": "27.4",
		"min": "16.9",
		"direction": "31"
	},
	{
		"test": "13",
		"max": "25.1",
		"min": "12.7",
		"direction": "29"
	}
]
```

## parse multiple files

Open command line and run: `sh parseMultipleFiles.sh`
