/*
 * @Description: 类例子
 * @Author: Cat
 * @Date: 2021-01-19 15:30:38
 * @LastEditTime: 2021-01-19 15:38:07
 * @LastEditor: Cat
 */

class Greeter {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  greet() {
    return 'Hello,' + this.greeting
  }
}

let greeter = new Greeter('world')
console.log(greeter.greet());
