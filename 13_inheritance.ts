class Person{
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    private age: number
  ){}

  greetMe(){
    console.log(`Hello ${this.firstName}`);
  }
}

class Student extends Person{
  constructor(
    fastName: string,
    lastName: string,
    email: string,
    age: number,
    public grade: string
  ){
    super(fastName, lastName, email, age);
  }

  greetMe(){
    super.greetMe();
    console.log(`Your grade is ${this.grade}`);
  }
}

let student = new Student('Riyam', 'Mondal', 'riyam@email.com', 27, 'A');
student.greetMe();