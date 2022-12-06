var pair;

var pairCount = 0;
var overlapCount = 0;


function rangeContains(range1, range2) {

    firstRange = range1.split("-");
    secondRange = range2.split("-");

    if ((parseInt(firstRange[0]) >= parseInt(secondRange[0]) &&
        parseInt(firstRange[1]) <= parseInt(secondRange[1])) ||
        (parseInt(secondRange[0]) >= parseInt(firstRange[0]) &&
            parseInt(secondRange[1]) <= parseInt(firstRange[1]))) {
        return true;
    }
    return false;

}

function rangesOverlap(range1, range2) {

    firstRange = range1.split("-");
    secondRange = range2.split("-");

    var first1 = parseInt(firstRange[0]);
    var first2 = parseInt(firstRange[1]);
    
    var second1 = parseInt(secondRange[0]);
    var second2 = parseInt(secondRange[1]);

    if ((second1 > first2) || (first1 > second2)) {
        return false;
    }
    return true;

}

require('fs').readFileSync('4.txt', 'utf-8').split(/\r?\n/).forEach(function (line) {
    if (line != "") {
        pair = line.split(",");

        if (rangeContains(pair[0], pair[1])) {
            pairCount += 1;
        }

        if (rangesOverlap(pair[0], pair[1])) {
            overlapCount += 1;
        }
    }
})

console.log("first part:", pairCount);
console.log("second part:", overlapCount);