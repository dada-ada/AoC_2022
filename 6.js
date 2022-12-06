
// Code expects that a marker exists

const fs = require("fs");

const buffer = fs.readFileSync("6.txt");
const data = buffer.toString();

function containsSameChars(str) {
    for (let char of str) {
        str = str.substring(1);
        if (str.includes(char)) {
            return true;
        }
    }
    return false;
}

function countMarkerIndex(markerLength) {

    for (let index = 0; index < data.length; index++) {

        let lastChars = data.substring(index, index+markerLength);
    
        if (!containsSameChars(lastChars)) {
            return index+markerLength;
        }
    }
}

console.log("first part:", countMarkerIndex(4));
console.log("second part:", countMarkerIndex(14));