const fs = require("fs");



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
}

function alternative(str1, str2) {
    switch (str1) {
        case "A":
            switch (str2) {
                case "X":
                    return "C";
                case "Y":
                    return "A";
                case "Z":
                    return "B";
            }
            break;
        case "B":
            switch (str2) {
                case "X":
                    return "A";
                case "Y":
                    return "B";
                case "Z":
                    return "C";
            }
            break;
        case "C":
            switch (str2) {
                case "X":
                    return "B";
                case "Y":
                    return "C";
                case "Z":
                    return "A";
            }
            break;
    }
}

function handPoint(hand) {
    if (hand === "X" || hand === "A") {
        return 1;
    } else if (hand === "Y" || hand === "B") {
        return 2;
    } else if (hand === "Z" || hand === "C") {
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

function gamePoint2(gameResult) {
    if (gameResult === "win") {
        return 6;
    } else if (gameResult === "draw") {
        return 3;
    } else if (gameResult === "lose") {
        return 0;
    }
}

function gameConverter(letter) {
    switch(letter) {
        case "X":
            return "lose"
        case "Y":
            return "draw"
        case "Z":
            return "win"
    }
} 

function main(inputData) {
    let points = 0;
    inputData.split("\r\n").forEach(e => {
        if (e.split(" ").length > 1) {
            let m = e.split(" ")
            let r = match(m[0], m[1])
            let t = gamePoint(r) + handPoint(m[1]);
            points += t;
        }
    })
    
    console.log("Points First Strategy: ", points);
}

function main2(inputData) {
    let points = 0;
    inputData.split("\r\n").forEach(e => {
        if (e.split(" ").length > 1) {
            let m = e.split(" ")
            let a = alternative(m[0], m[1]);
            let r = gameConverter(m[1]);
            let t = gamePoint2(r) + handPoint(a);
            points += t;
        }
    })
    
    console.log("Points Second Strategy: ", points);
}

fs.readFile("./input.txt", "utf8", (err, data) => {
    main(data);
    main2(data);
});


