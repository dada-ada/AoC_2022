// [elem points, {opponent:points}]
// score = data.get(myTurn)[0] + data.get(myTurn)[2].get(oppTurn)
const data = { X: [1, { 'A': 3, 'B': 0, 'C': 6 }], Y: [2, { 'A': 6, 'B': 3, 'C': 0 }], Z: [3, { 'A': 0, 'B': 6, 'C': 3 }] };

var oppTurn;
var myTurn;
var totalScore = 0;

require('fs').readFileSync('2.txt', 'utf-8').split(/\r?\n/).forEach(function (line) {
    if (line != "") {
        oppTurn = line[0];
        myTurn = line[2];
        totalScore += data[myTurn][0] + data[myTurn][1][oppTurn];
    }
})

console.log("1st part", totalScore);

// X lose (0), Y draw (3), Z win (6)
// A rock, B paper, C scissors

const data2 = { A: { X: 'C', Y: 'A', Z: 'B'}, B: { X: 'A', Y: 'B', Z: 'C' }, C: { X: 'B', Y: 'C', Z: 'A' }};
const points = {A:1, B:2, C:3, X:0, Y:3, Z:6};

var totalScore2 = 0;
var oppHand;
var outcome;

require('fs').readFileSync('2.txt', 'utf-8').split(/\r?\n/).forEach(function (line) {
    if (line != "") {
        oppHand = line[0];
        outcome = line[2];

        var ownHand = data2[oppHand][outcome];

        totalScore2 += points[outcome] + points[ownHand];
    }
})

console.log("2nd part", totalScore2);