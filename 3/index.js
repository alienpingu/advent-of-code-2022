const fs = require("fs");

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function compareString(stringArray) {
  let result = false;
  stringArray.length === 2
    ? stringArray[0]
        .split("")
        .forEach((c1) => (stringArray[1].includes(c1) ? (result = c1) : null))
    : stringArray[0]
        .split("")
        .forEach((c1) =>
          stringArray[1].includes(c1)
            ? stringArray[2].includes(c1)
              ? (result = c1)
              : null
            : null
        );
  return result;
}

function computeValue(char) {
  let result = 1;
  letters.forEach((e, i) => (e === char ? (result += i) : null));
  return result;
}

function groupArr(data, n) {
  var group = [];
  for (var i = 0, j = 0; i < data.length; i++) {
    if (i >= n && i % n === 0) j++;
    group[j] = group[j] || [];
    group[j].push(data[i]);
  }
  return group;
}

fs.readFile("./input.txt", "utf8", (err, data) => {
    let total = [0,0];
    // Main First Part
    data.split("\r\n").forEach((e, i) => {
      let char = compareString([
        e.slice(0, e.length / 2),
        e.slice(e.length / 2),
      ]);
      char !== false
        ? (total[0] = Number(total[0]) + Number(computeValue(char)))
        : null;
    });
    // Main Second Part
    groupArr(data.split("\r\n"), 3).forEach(
      (e) => (total[1] += computeValue(compareString([e[0], e[1], e[2]])))
    );
    // Print Answers
    console.log("Answer #1: ", total[0]);
    console.log("Answer #2: ", total[1]);
});