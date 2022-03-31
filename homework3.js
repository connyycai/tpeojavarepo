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

function everyTenSeconds() {
    var count = 0;
    function countHelloWorld() {
        count += 1
    }
    var intervalId = setInterval(console.log, 10000, "Hello World")
    var intervalId = setInterval(countHelloWorld, 10000)
    if (count == 12) {
        clearTimeout(intervalId)
    }
}

everyTenSeconds()