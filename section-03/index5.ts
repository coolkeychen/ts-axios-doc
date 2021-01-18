/*
 * @Description: 可索引类型
 * @Author: Cat
 * @Date: 2021-01-18 17:37:46
 * @LastEditTime: 2021-01-18 17:57:27
 * @LastEditor: Cat
 */


interface stringArray {
  [index: number]: string
}

let myArray: stringArray
myArray = ['Bob', 'Fred']
let myStr: string = myArray[0]
console.log(myStr);

class Animal {
  name: string
}

class Dog extends Animal{
  breed: string
}

// interface NotOkey {
//   [x: number]: Animal
//   [x: string]: Dog
// }

interface Okey {
  [x: number]: Dog
  
  [x: string]: Animal
}

interface NumberDictionary {
  [index: string]: number;
  length: number;
  name: number
}


interface ReadonlyStringArray {
  readonly [index: number]: string;
}

let myArray: ReadonlyStringArray = ['Alice', 'Bob'];
myArray[2] = 'Mallory'
