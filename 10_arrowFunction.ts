let multiplyIt = function(num1: number, num2: number): number {
  return num1 * num2;
}

let multipleItArrow = (num1: number, num2: number) => num1 * num2;

let showFirstNumber: (num1: number) => void;

showFirstNumber = (num1: number) => console.log(num1);

console.log(multiplyIt(5,7));
console.log(multipleItArrow(5, 7));
showFirstNumber(50);