#!/usr/bin/env node

const {readFile, readFileSync} = require('fs');

const input = process.argv[2];
const output = readFileSync(input);

readFile(input, (err, data) => {
    if (err) throw err;
    process.stdout.write(output);

});