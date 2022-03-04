function sumOfSquareArea(a, b) {
    return (a ** 2) + (b ** 2);
}

var val1 = sumOfSquareArea(23, 4);
var val2 = sumOfSquareArea(46, 67);
var val3 = sumOfSquareArea(13, 78);

console.log(val1);
console.log(val2);
console.log(val3);

function gradeCalculator(homeworkAvg, quizAvg, examAvg) {
    return (homeworkAvg * 0.1) + (quizAvg * 0.15) + (examAvg * 0.75);
}

var grade1 = gradeCalculator(90, 92, 100);
var grade2 = gradeCalculator(99, 89, 95);
var grade3 = gradeCalculator(80, 95, 94);

console.log(grade1);
console.log(grade2);
console.log(grade3);