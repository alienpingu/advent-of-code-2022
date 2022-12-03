const fs = require("fs");

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function splitString(string) {
    let middle = Math.floor(string.length / 2);
    return([string.substr(0, middle),string.substr(middle)]);
}

function compareTwoString(string1, string2) {
    let result = false;
    string1.split('').forEach(c1 => {
        string2.split('').forEach(c2 => {
            if(c1 === c2) {
                result = c1
            }
        })
    })
    return (result);
}

function compareThreeString(string1, string2, string3) {
    let result = false;
    string1.split('').forEach(c1 => {
        string2.split('').forEach(c2 => {
            if(c1 === c2) {
                string3.split('').forEach(c3 => {
                    if (c1 === c3) {
                        result = c1
                    }
                })
            }
        })
    })
    return (result);
}

function computeValue(char) {
    let result = 1
    letters.forEach((e,i) => {
        if (e === char) {
            result += i
        }
    })
    return(result)
}

function groupArr(data, n) {
    var group = [];
    for (var i = 0, j = 0; i < data.length; i++) {
        if (i >= n && i % n === 0)
            j++;
        group[j] = group[j] || [];
        group[j].push(data[i])
    }
    return group;
}

function main(input) {
    let total = 0;
    input.split('\r\n').forEach((e,i)=> {
        let splittedArr = splitString(e);
        let char = compareTwoString(splittedArr[0],splittedArr[1]);
        (char !== false) ? total = Number(total) + Number(computeValue(char)) : null

   })
   return(total);
}

function main2(input) {
    let total = 0;
    let grouped = groupArr(input.split('\r\n'), 3);
    grouped.forEach(e => total += computeValue(compareThreeString(e[0],e[1],e[2])));
    return(total);
}

fs.readFile("./input.txt", "utf8", (err, data) => {
    console.log("Answer #1: ",main(data));
    console.log("Answer #2: ",main2(data));
});