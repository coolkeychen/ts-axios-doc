/*
 * @Description: 存取器
 * @Author: Cat
 * @Date: 2021-01-20 11:46:39
 * @LastEditTime: 2021-01-20 11:52:06
 * @LastEditor: Cat
 */

let passcode = 'secret passcode'

class Employee {
  private _fullName: string
  // constructor(name: string) {
  // }

  get fullName(): string {
    return this._fullName
  }

  set fullName(newName: string) {
    if (passcode && passcode == 'secret passcode') {
      this._fullName = newName
    } else {
      console.log('Error: unauthorized update of employee!');
      
    }
  }
}

let employee = new Employee()
employee.fullName = "Bob Smith"

if (employee.fullName) {
  console.log(employee.fullName);
}
