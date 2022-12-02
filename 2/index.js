const fs = require("fs");

let points = 0;

function match(str1, str2) {
    switch (str1) {
        case "A":
            switch (str2) {
                case "X":
                    return "draw";
                case "Y":
                    return "lose";
                case "Z":
                    return "win";
            }
            break;
        case "B":
            switch (str2) {
                case "X":
                    return "win";
                case "Y":
                    return "draw";
                case "Z":
                    return "lose";
            }
            break;
        case "C":
            switch (str2) {
                case "X":
                    return "lose";
                case "Y":
                    return "win";
                case "Z":
                    return "draw";
            }
            break;
    }
    return "";
}

function handPoint(hand) {
    if (hand === "X") {
        return 1;
    } else if (hand === "Y") {
        return 2;
    } else if (hand === "Z") {
        return 3;
    }
}

function gamePoint(gameResult) {
    if (gameResult === "lose") {
        return 6;
    } else if (gameResult === "draw") {
        return 3;
    } else if (gameResult === "win") {
        return 0;
    }
}

function main(inputData) {
    inputData.split("\r\n").forEach(e => {
        if (e.split(" ").length > 1) {
            let m = e.split(" ")
            let r = match(m[0], m[1])
            let t = gamePoint(r) + handPoint(m[1]);
            points += t;
        }
    })
    
    console.log("Points: ", points);
}

fs.readFile("./input.txt", "utf8", (err, data) => main(data));