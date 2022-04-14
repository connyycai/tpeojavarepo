function reverse(string) {
    var string2 = ""
    for (var i = string.length - 1; i >= 0; i--) {
        string2.concat(string[i]);      
    }
    return string2;
}

reverse("UT Austin")
reverse("TPEO")
reverse("Pecan Pie")

function numVowels(string) {
    var count = 0
    for (var i = 0; i < string.length; i++) {
        if (string[i] == "a") or (string[i] == "e") or (string[i] == "i") or (string[i] == "o") or (string[i] == "u") {
            count += 1;
        }
    }
    return count;
}

numVowels("UT Austin")
numVowels("TPEO")
numVowels("Pecan Pie")

function numStringsShorterThanLength(strings, length) {
    var count = 0
    for (var i = 0; i < strings.length; i++) {
        if (strings[i].length < length) {
            count += 1
        }
    }
    return count
}

numStringsShorterThanLength(["pig", "goat", "lion", "hare"], 3)
numStringsShorterThanLength(["fourteen", "six", "eleven", "twelve"], 5)
numStringsShorterThanLength(["jester", "duren", "littlefield", "san jacinto"], 6)