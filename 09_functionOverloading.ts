function person(name: string): string;
function person(age: number): string;
function person(isMarried: boolean): string;

function person(value: (string | number | boolean)): string {
  switch (typeof value) {
    case 'string':
      return `My name is ${value}`;
      break;

    case 'number':
      return 'My age is '+value;
      break;

    case 'boolean': 
      return value? 'I am married': 'not yet married';
      break;
  }
}

console.log(person('Krish'));
console.log(person(30));
console.log(person(true));