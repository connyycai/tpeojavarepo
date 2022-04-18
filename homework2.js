// Homework from Week 3

// Pt.1 countUpwardsByThree

function countUpwardsByThree() {
    for (var i = 0; i < 31; i += 3) {
        console.log(i)
    }
}

countUpwardsByThree();

// Pt.2 guessMyFavoriteNumber

function guessMyFavoriteNumber(guess) {
    if (guess != 3) {
        console.log("Try again!")
    } else {
        console.log("You guessed my favorite number!")
    }
}

guessMyFavoriteNumber(3); // Correct 
guessMyFavoriteNumber(4); // Incorrect
guessMyFavoriteNumber(5); // Incorrect
guessMyFavoriteNumber(23); // Incorrect

// Pt.3 convertNumberToDay

function convertNumberToDay(number) {
    switch (number) {
        case 0:
            console.log("Sunday");
            break;
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        default:
            console.log("Not a day of the week.")
    }
}

convertNumberToDay(0); // 0 - Sun
convertNumberToDay(1); // 1 - Mon
convertNumberToDay(2); // 2 - Tues
convertNumberToDay(3); // 3 - Wed
convertNumberToDay(4); // 4 - Thurs
convertNumberToDay(5); // 5 - Fri
convertNumberToDay(6); // 6 - Sat
convertNumberToDay(7); // Invalid