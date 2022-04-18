// Homework for Week 4

// Pt.1 powersOfThree

function powersOfThree() {
    var limit = 9
    for (var i = 0; i <= limit; i++) {
        var power = (3 ** i);
        console.log(power);
        if (power == 9) {
            console.log("This is my favorite power of three!")
        }
    }
}

var timeoutId = setTimeout(powersOfThree, 3000);

// Pt.2 everyTenSeconds

function everyTenSeconds() {
    var intervalId = setInterval(console.log, 10000, "Hello World");
    setTimeout(clearInterval, 130000, intervalId);
}

everyTenSeconds()