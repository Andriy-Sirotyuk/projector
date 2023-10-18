class Vehicle {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }

    displayInfo() {
        console.log(`Марка: ${this.brand}`);
        console.log(`Рік випуску: ${this.year}`);
    }
}

class Car extends Vehicle {
    constructor(brand, year, model) {
        super(brand, year);
        this.model = model;
    }

    displayInfo() {
        console.log("Автомобіль:");
        super.displayInfo();
        console.log(`Модель: ${this.model}`);
    }
}

class Bicycle extends Vehicle {
    constructor(brand, year, type) {
        super(brand, year);
        this.type = type;
    }

    displayInfo() {
        console.log("Велосипед:");
        super.displayInfo();
        console.log(`Тип: ${this.type}`);
    }
}

const car = new Car("Toyota", 2022, "Camry");
const bicycle = new Bicycle("Giant", 2021, "Гірський");

console.log("Інформація про автомобіль:");
car.displayInfo();

console.log("\nІнформація про велосипед:");
bicycle.displayInfo();
