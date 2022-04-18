// Homework for Week 2

// Pt.1: sumofSquareAreas

function sumofSquareAreas(a, b) {
    var sum = (a ** 2) + (b ** 2);
    return sum;
}

sumSq = sumofSquareAreas(5, 6);
console.log(sumSq)
sumSq = sumofSquareAreas(20, 1);
console.log(sumSq)
sumSq = sumofSquareAreas(19, 42);
console.log(sumSq)

// Pt.2: gradeCalculator

function gradeCalculator(homeworkAvg, quizAvg, examAvg) {
    var grade  = (homeworkAvg * 0.1) + (quizAvg * 0.15) + (examAvg * 0.75)
    return grade
}

grade1 = gradeCalculator(90, 42, 100);
console.log(grade1);
grade2 = gradeCalculator(97, 98, 89);
console.log(grade2);
grade3 = gradeCalculator(100, 95, 88);
console.log(grade3);