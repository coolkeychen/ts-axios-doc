/*
 * @Description: 继承2
 * @Author: Cat
 * @Date: 2021-01-19 15:52:49
 * @LastEditTime: 2021-01-19 16:01:50
 * @LastEditor: Cat
 */

class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name)
  }

  move(distance: number = 5) {
    console.log('Slithering...')
    super.move(distance)
  }
}

class Horse extends Animal{
  constructor(name: string) {
    super(name)
  }

  move(distance: number = 10) {
    console.log('Galloping..');
    super.move(distance)
  }
}

let sam = new Snake('Sammy')
let tom: Animal = new Horse('Tommy')


sam.move();
tom.move(34)