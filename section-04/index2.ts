/*
 * @Description: 继承
 * @Author: Cat
 * @Date: 2021-01-19 15:44:36
 * @LastEditTime: 2021-01-19 15:46:38
 * @LastEditor: Cat
 */

class Animal {
  move(distance: number = 0) {
    console.log(`Animal moved ${distance}m.`)
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!')
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
