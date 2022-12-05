const fs = require("fs");

function computeRow(row) {
  let computed = [];
  row.split(",").map((e) => computed.push(e.split("-")));
  return computed;
}

function generateRange(range1, range2) {
  var list = [];
  for (var i = Number(range1); i <= Number(range2); i++) {
    list.push(Number(i));
  }
  return list;
}

function computeRoute(row) {
  let computed = computeRow(row);
  return [
    generateRange(computed[0][0], computed[0][1]),
    generateRange(computed[1][0], computed[1][1]),
  ];
}

function compareFullArray(arr1, arr2) {
  return (
    arr1.filter((x) => !arr2.includes(x)).length === 0 ||
    arr2.filter((x) => !arr1.includes(x)).length === 0
  );
}

function compareSingleArray(arr1, arr2) {
  let result = false;
  arr1.forEach((e) => (arr2.includes(e) ? (result = true) : null));
  return result;
}

function main(input) {
  let c1 = 0;
  let c2 = 0;
  input.split("\r\n").map((row) => {
    let route = computeRoute(row);
    if (compareFullArray(route[0], route[1])) c1++;
    if (compareSingleArray(route[0], route[1])) c2++;
  });
  console.log("Answer #1: ", c1);
  console.log("Answer #2: ", c2);
}

fs.readFile("./input.txt", "utf8", (err, data) => main(data));