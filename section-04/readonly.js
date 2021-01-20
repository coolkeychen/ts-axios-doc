/*
 * @Description: readonly 修饰符
 * @Author: Cat
 * @Date: 2021-01-20 10:48:57
 * @LastEditTime: 2021-01-20 10:50:44
 * @LastEditor: Cat
 */
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var john = new Person('John');
john.name = 'peter';
