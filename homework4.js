// Homework for Week 5

// Pt.1 Car

function Car(model, year, color, mpg) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.mpg = mpg;
}

var car1 = new Car("A-Class", 2021, "Black", 25)
var car2 = new Car("Aviator", 2022, "Black", 18)
var car3 = new Car("bZ4X", 2023, "Silver", 40)

console.log(car1.mpg)
console.log(car2.mpg)
console.log(car3.mpg)

// Pt.2 Vehicle

function Vehicle(car) {
    this.car = car;
}

var vehicle1 = new Vehicle(car1);
var vehicle2 = new Vehicle(car2);
var vehicle3 = new Vehicle(car3);

console.log(vehicle1.car.mpg);
console.log(vehicle2.car.mpg);
console.log(vehicle3.car.mpg);

