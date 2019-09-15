"use strict";
exports.__esModule = true;
var HelloWorld = /** @class */ (function () {
    function HelloWorld() {
    }
    HelloWorld.prototype.sayHi = function () {
        console.log('Hello World');
    };
    return HelloWorld;
}());
exports.HelloWorld = HelloWorld;
var myClass = new HelloWorld();
myClass.sayHi();
