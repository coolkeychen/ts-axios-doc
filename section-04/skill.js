/*
 * @Description: 高级技巧
 * @Author: Cat
 * @Date: 2021-01-20 15:17:19
 * @LastEditTime: 2021-01-20 15:29:05
 * @LastEditor: Cat
 */
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return 'Hello,' + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    };
    Greeter.standardGreeting = 'Hello, there';
    return Greeter;
}());
var greeter;
greeter = new Greeter('gay');
console.log(greeter.greet());
var greeterMaker = Greeter;
greeterMaker.standardGreeting = 'Hey there';
var greeter2 = new greeterMaker();
console.log(greeter2.greet());
