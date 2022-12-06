
function getCommonChars(string1, string2) {
    var commonChars = "";

    for (let i of string1) {
        if (string2.includes(i)) {
            commonChars += i;
        }
    }
    return commonChars;
}

function getValue(character) {

    if (character.valueOf() == (character.toUpperCase()).valueOf()) {
        return character.charCodeAt() - 38;
    } else {
        return character.charCodeAt() - 96;
    }
}

var first;
var second;
var commonChar;
var points = 0;

require('fs').readFileSync('3.txt', 'utf-8').split(/\r?\n/).forEach(function (line) {
    if (line != "") {

        first = line.slice(0, line.length / 2);
        second = line.slice(line.length / 2);

        commonChar = getCommonChars(first, second);
        points += getValue(commonChar);
    }
})

console.log("first part", points);



var lines = [];
points = 0;
var counter = 0;
var commonChars = "";

require('fs').readFileSync('3.txt', 'utf-8').split(/\r?\n/).forEach(function (line) {
    if (line != "") {
        counter += 1;
        lines.push(line);

        if (counter >= 3) {

            commonChars = getCommonChars(getCommonChars(lines.at(0), lines.at(1)), lines.at(2));

            points += getValue(commonChars);

            commonChars = "";
            lines = [];
            counter = 0;
        }
    }
})

console.log("second part", points);