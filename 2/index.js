const fs = require("fs");

let result = {
  "A X": [4, 3],
  "A Y": [8, 4],
  "A Z": [3, 8],
  "B X": [1, 1],
  "B Y": [5, 5],
  "B Z": [9, 9],
  "C X": [7, 2],
  "C Y": [2, 6],
  "C Z": [6, 7],
};

fs.readFile("./input.txt", "utf8", (err, data) => {
  let points = [0, 0];
  data.split("\r\n").map((e) => points.map((n,i) => (points[i] += result[e][i])));
  points.map((p, i) => console.log(`Point ${i + 1}: ${p}`));
});