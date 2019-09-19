var Person = /** @class */ (function () {
    function Person(fn, ln, email, age) {
        this.firstName = fn;
        this.lastName = ln;
        this.email = email;
        this.age = age;
    }
    Person.prototype.greetMe = function () {
        console.log("Hello " + this.firstName);
    };
    return Person;
}());
var p = new Person('Krish', 'mandal', 'anyabc@email.com', 31);
p.greetMe();
// Implicit waay to declare class property
var Car = /** @class */ (function () {
    function Car(make, model, price) {
        this.make = make;
        this.model = model;
        this.price = price;
    }
    Car.prototype.showDetails = function () {
        console.log("This is " + this.make + "-" + this.model + ", costing " + this.price);
    };
    return Car;
}());
var myCar = new Car('bmw', '750li', 650000);
myCar.showDetails();
