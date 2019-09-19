var rectangle = {
    height: 20,
    width: 10,
    area: function () {
        return this.height * this.width;
    }
};
console.log("Rectangle area = " + rectangle.area());
// let square: Object = { // type has been specified explicitly
//   height: 20,
//   width: 20,
//   area: function(){
//     return this.height * this.width;
//   }
// }
// console.log(`Square area = ${square.area()}`);
