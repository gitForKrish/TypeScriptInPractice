class Person {
  public firstName: string;
  public lastName: string;
  public email: string;
  private age: number;

  constructor(fn: string, ln: string, email: string, age:number){
    this.firstName = fn;
    this.lastName = ln;
    this.email = email;
    this.age = age;
  }

  greetMe(){
    console.log(`Hello ${this.firstName}`);
  }
}
let p = new Person('Krish', 'mandal', 'anyabc@email.com', 31);
p.greetMe();

// Implicit waay to declare class property
class Car{
  constructor(
    public make: string,
    public model: string,
    private price: number
  ){}
  showDetails() {
    console.log(`This is ${this.make}-${this.model}, costing ${this.price}`);
  }
}

let myCar = new Car('bmw', '750li',650000);
myCar.showDetails();