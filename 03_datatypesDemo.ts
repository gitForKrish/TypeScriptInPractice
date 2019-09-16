function stringDemo(whatToSay:string) {
  console.log(whatToSay);
}

stringDemo('hello typescript');

function numberDemo(num1:number, num2: number): number {
  return num1 + num2;
}

console.log(numberDemo(20,30));

function booleanDemo(willYouGo:boolean) {
  if (willYouGo) {
    console.log('I will go');
  } else {
    console.log('I will not go');
  }
}
booleanDemo(true);