function Car(model, year, color, mpg) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.mpg = mpg;
}

car1 = new Car("A-Class", 2021, "Black", 25)
car2 = new Car("Aviator", 2022, "Black", 18)
car3 = new Car("bZ4X", 2023, "Silver", 40)

console.log(car1.mpg)
console.log(car2.mpg)
console.log(car3.mpg)

function Vehicle(car) {
    this.car = car;
}

vehicle1 = new Vehicle(car1);
vehicle2 = new Vehicle(car2);
vehicle3 = new Vehicle(car3);

console.log(vehicle1.car.mpg);
console.log(vehicle2.car.mpg);
console.log(vehicle3.car.mpg);

