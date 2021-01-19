/*
 * @Description: 继承接口
 * @Author: Cat
 * @Date: 2021-01-19 14:21:03
 * @LastEditTime: 2021-01-19 14:33:56
 * @LastEditor: Cat
 */

interface Shape {
  color: string
}

interface PenStroke {
  penWidth: number
}

interface Square extends Shape, PenStroke {
  sideLength: number
}

let square = {} as Square
square.color = 'blue'
square.sideLength = 11
square.penWidth = 5.0
console.log(square.sideLength)
console.log(square.color)
console.log(square.penWidth)
