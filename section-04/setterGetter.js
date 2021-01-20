/*
 * @Description: 存取器
 * @Author: Cat
 * @Date: 2021-01-20 11:46:39
 * @LastEditTime: 2021-01-20 14:27:21
 * @LastEditor: Cat
 */
var passcode = 'secret passcode1';
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        // constructor(name: string) {
        // }
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == 'secret passcode') {
                this._fullName = newName;
            }
            else {
                console.log('Error: unauthorized update of employee!');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
