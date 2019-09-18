function addWithRest(num1:number, num2: number, ... numbers: number[]): number {
  let total: number = 0;
  total = num1 +num2;
  numbers.forEach(item => {
    total += item;
  });
  return total;
}

console.log(addWithRest(1,2,3,4,5,6,7,8,9,10));
console.log(addWithRest(10,20));