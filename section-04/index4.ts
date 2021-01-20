/*
 * @Description: 公共、私有与受保护的修饰符
 * @Author: Cat
 * @Date: 2021-01-19 16:49:16
 * @LastEditTime: 2021-01-19 16:57:22
 * @LastEditor: Cat
 */

class Animal {
  private name: string
  public constructor(name: string) {
    this.name = name
  }
  public move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}`);
  }
}

// new Animal('Cat').name

class Rhino extends Animal {
  constructor() {
    super('Rhino')
  }
}

class Employee {
  private name: string
  constructor(name: string) {
    this.name = name
  }
}

let animal = new Animal('Goat')
let rhino = new Rhino()
let employee = new Employee('Bob')

animal = rhino
animal = employee