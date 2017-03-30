#!/bin/bash
for filename in test/*.txt
do
	node "index.js" "--i="$filename"" "--o=test/$(basename "$filename" .txt).json" "--h"
done
