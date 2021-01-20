/*
 * @Description: 类例子
 * @Author: Cat
 * @Date: 2021-01-19 15:30:38
 * @LastEditTime: 2021-01-19 15:38:07
 * @LastEditor: Cat
 */
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return 'Hello,' + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('world');
console.log(greeter.greet());
