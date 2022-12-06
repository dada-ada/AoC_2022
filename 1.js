const fs = require('fs');

var sum = 0;
var biggestSum = 0;

require('fs').readFileSync('1.txt', 'utf-8').split(/\r?\n/).forEach(function (line) {
    if (line === "") {
        if (sum > biggestSum) {
            biggestSum = sum;
        }
        sum = 0;
    } else if (!isNaN(line)) {
        sum += parseInt(line);
    }
})

console.log("biggest sum: ", biggestSum);

sum = 0;

var first = 0;
var second = 0;
var third = 0;

require('fs').readFileSync('1.txt', 'utf-8').split(/\r?\n/).forEach(function (line) {

    if (line === "") {

        if (sum > first) {
            third = second;
            second = first;
            first = sum;

        } else if (sum > second) {
            third = second;
            second = sum;

        } else if (sum > third) {
            third = sum;

        }

        sum = 0;

    } else if (!isNaN(line)) {
        sum += parseInt(line);
    }
})

console.log("three biggest sum: ", first + second + third);