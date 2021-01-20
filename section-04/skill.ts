/*
 * @Description: 高级技巧
 * @Author: Cat
 * @Date: 2021-01-20 15:17:19
 * @LastEditTime: 2021-01-20 15:31:31
 * @LastEditor: Cat
 */

class Greeter {
  static standardGreeting = 'Hello, there'
  greeting: string
  constructor(message?: string) {
    this.greeting = message
  }

  greet() {
    if (this.greeting) {
      return 'Hello,' + this.greeting
    } else {
      return Greeter.standardGreeting
    }
  }
}

let greeter: Greeter
greeter = new Greeter('gay');
console.log(greeter.greet())

let greeterMaker: typeof Greeter = Greeter
greeterMaker.standardGreeting = 'Hey there'

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet())



class Point {
  x: number
  y: number
}

interface Point3d extends Point{
  z: number
}

let point3d: Point3d = {x: 1, y: 2, z: 3}
