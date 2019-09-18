function calculatePower(num1:number, num2: number = 2): number {
  return Math.pow(num1, num2);
}

console.log(calculatePower(10));
console.log(calculatePower(10,10));