function addWithRest(num1, num2) {
    var numbers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        numbers[_i - 2] = arguments[_i];
    }
    var total = 0;
    total = num1 + num2;
    numbers.forEach(function (item) {
        total += item;
    });
    return total;
}
console.log(addWithRest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(addWithRest(10, 20));
