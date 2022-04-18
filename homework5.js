// Homework for Week 6

// Pt.1 reverse

function reverse(string) {
    var string2 = ""
    for (var i = string.length - 1; i >= 0; i--) {
        string2 += string[i];      
    }
    return string2;
}

console.log(reverse("UT Austin"))
console.log(reverse("TPEO"))
console.log(reverse("Pecan Pie"))

// Pt.2 numVowels

function numVowels(string) {
    var count = 0
    string = string.toLowerCase()
    for (var i = 0; i < string.length; i++) {
        if (string[i] == "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
            count += 1;
        }
    }
    return count;
}

console.log(numVowels("UT Austin")) // 4
console.log(numVowels("TPEO")) // 2
console.log(numVowels("Pecan Pie"))  // 4

// Pt.3 numStringsShorterThanLength

function numStringsShorterThanLength(strings, length) {
    var count = 0
    for (var i = 0; i < strings.length; i++) {
        if (strings[i].length < length) {
            count += 1
        }
    }
    return count
}

console.log(numStringsShorterThanLength(["pig", "goat", "lion", "hare"], 3)) // 0 
console.log(numStringsShorterThanLength(["fourteen", "six", "eleven", "twelve"], 5)) // 1
console.log(numStringsShorterThanLength(["jester", "duren", "field", "san jacinto"], 6)) // 2