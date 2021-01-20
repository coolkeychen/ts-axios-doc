/*
 * @Description: 理解 protected
 * @Author: Cat
 * @Date: 2021-01-19 17:01:21
 * @LastEditTime: 2021-01-19 17:23:35
 * @LastEditor: Cat
 */

class Person {
  protected name: string
  constructor(name: string ) {
    this.name = name
  }
}

class Employee extends Person {
  private departmnet: string
  constructor(name: string, department: string) {
    super(name)
    this.departmnet = department
  }

  getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.departmnet}`
  }
}

let howard = new Employee('Howard', 'Sales')
console.log(howard.getElevatorPitch());
console.log(howard.name);
