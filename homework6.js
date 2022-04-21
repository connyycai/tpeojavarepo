// Homework for Week 7

// Pt.1 Car

function Car(model, color, year, mpg, id) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.mpg = mpg;
    this.id = id;
}

var Carlist = []
for (var i = 0; i < 10; i++) {
    var car = []
    for (var j = 0; j < 10; j++) {
        car.push(new Car("Tesla Model X", "black", 2021, 26.0, i * 10 + j + 1))
    }
    Carlist.push(car)
}

console.log(Carlist);

// Pt.2 getCarsBetweenIds

function getCarsBetweenIds(idMin, idMax, Carlist) {
    var btwnCar = []
    var row = Math.floor(idMin / 10);
    if (idMin % 10 == 0) {
        row -- 
    }
    col = (idMin - 1) % 10
    carId = Carlist[row][col].id;
    while (carId <= idMax) {
        var car = Carlist[row][col]
        car.color = "blue"
        btwnCar.push(car)
        if (col % 9 == 0 && col != 0) {
            col = 0
            row ++
        } else {
            col ++
        }
        carId ++
    }
    return btwnCar;
}

console.log(getCarsBetweenIds(5, 9, Carlist))
console.log(getCarsBetweenIds(15, 100, Carlist))
console.log(getCarsBetweenIds(15, 100, Carlist))
