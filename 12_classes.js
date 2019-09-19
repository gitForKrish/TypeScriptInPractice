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
