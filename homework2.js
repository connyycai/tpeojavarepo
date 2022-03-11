function countUpwardsByThree() {
    for (var i = 0; i < 31; i += 3) {
        console.log(i)
    }
}

countUpwardsByThree();

function guessMyFavoriteNumber(guess) {
    if (guess != 3) {
        console.log("Try again!")
    } else {
        console.log("You guessed my favorite number!")
    }
}

guessMyFavoriteNumber(3);
guessMyFavoriteNumber(4);
guessMyFavoriteNumber(5);
guessMyFavoriteNumber(23);

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

convertNumberToDay(0);
convertNumberToDay(1);
convertNumberToDay(2);
convertNumberToDay(3);
convertNumberToDay(4);
convertNumberToDay(5);
convertNumberToDay(6);
convertNumberToDay(7);