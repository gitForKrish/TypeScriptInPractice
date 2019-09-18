function calculatePower(num1, num2) {
    if (num2 === void 0) { num2 = 2; }
    return Math.pow(num1, num2);
}
console.log(calculatePower(10));
console.log(calculatePower(10, 10));
