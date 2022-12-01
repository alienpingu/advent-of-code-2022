const fs = require("fs");

computeArray = (inputData) => {
  let tmp = [];
  let n = 0;
  inputData.split("\r\n").forEach((e) => {
    if (e > 0) {
      n += Number(e);
    } else {
      tmp.push(n);
      n = 0;
    }
  });
  return tmp;
};

getMax = (array) => array.reduce((a, b) => Math.max(a, b));

getThreeMax = (array) =>
  array
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((a, b) => a + b, 0);

main = (inputData) => {
  let arr = computeArray(inputData);
  console.log("Max: ", getMax(arr));
  console.log("Max3: ", getThreeMax(arr));
};

fs.readFile("./input.txt", "utf8", (err, data) => main(data));