// Homework for Week 7

// Pt.1 Car

var Car = []
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        Car[i][j] = {
            model: 6,
            color: "black",
            year: 2002,
            mpg: 60,
            id: j + 1
        }
    }
}

console.log(Car);

// Pt.2 getCarsBetweenIds

function getCarsBetweenIds(idMin, idMax) {
    btwnCar = []
    for (i = 0; i < 10; i++) {
        Car.color = "blue";
        for (j=0; j < 10; i++) {
            if (Car[i][j].id >= idMin && Car[i][j].id <= idMax) {
                btwnCar.push(Car[i][j]);
            }
            if (Car[i][j].id <= idMax) {
                break
            }
        }
    }
    return btwnCar
}

console.log(getCarsBetweenIds(5,9))