/*
 * @Description: 只读属性, 一些对象属性只能在对象刚创建时修改值
 * @Author: Cat
 * @Date: 2021-01-18 15:58:10
 * @LastEditTime: 2021-01-18 16:16:22
 * @LastEditor: Cat
 */

interface Point {
  readonly x: number
  readonly y: number
}

let p1: Point = {x: 10, y: 20}
// p1.x = 15;


let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number>  = a
ro[0] = 12
ro.push(5)
ro.length = 100;
a = ro

let b = ro as number