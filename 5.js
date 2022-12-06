var stackCopied = false;
var data = [[], [], [], [], [], [], [], [], []];

require('fs').readFileSync('5.txt', 'utf-8').split(/\r?\n/).forEach(function (line) {
    if (line != "") {
        if (!stackCopied) {
            if (parseInt(line.charAt(1)) == 1) {
                stackCopied = true;
                data.forEach(arr => arr = arr.reverse());
            } else {
                let counter = 0;
                for (let i = 1; i < 35; i += 4) {
                    let mark = line.charAt(i);
                    if (mark.valueOf() != " ") {
                        data[counter].push(mark);
                    }
                    counter += 1;
                }
            }
        } else {
            let action = line.split(" ");
            let howMany = action[1];
            let from = action[3];
            let to = action[5];

            for (let i = 0; i < howMany; i++) {
                let moving = data[from - 1].pop();
                data[to - 1].push(moving);
            }
        }
    }
})

console.log("first part:");
data.forEach(arr => console.log(arr[arr.length - 1]));

var stackCopied2 = false;
var data2 = [[], [], [], [], [], [], [], [], []];

require('fs').readFileSync('5.txt', 'utf-8').split(/\r?\n/).forEach(function (line) {
    if (line != "") {
        if (!stackCopied2) {
            if (parseInt(line.charAt(1)) == 1) {
                stackCopied2 = true;
                data2.forEach(arr => arr = arr.reverse());
            } else {
                let counter = 0;
                for (let i = 1; i < 35; i += 4) {
                    let mark = line.charAt(i);
                    if (mark.valueOf() != " ") {
                        data2[counter].push(mark);
                    }
                    counter += 1;
                }
            }
        } else {

            let action = line.split(" ");
            let howMany = parseInt(action[1]);
            let from = parseInt(action[3]);
            let to = parseInt(action[5]);

            let subArray = [];
            for (let i = 0; i < howMany; i++) {

                let moving = data2[from - 1].pop();
                subArray.push(moving);
            }
            data2[to-1] = data2[to - 1].concat(subArray.reverse());
        }
    }
})

console.log("second part:");
data2.forEach(arr => console.log(arr[arr.length - 1]));