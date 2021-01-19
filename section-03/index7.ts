/*
 * @Description: 类静态部分与实例部分
 * @Author: Cat
 * @Date: 2021-01-19 14:09:29
 * @LastEditTime: 2021-01-19 14:18:23
 * @LastEditor: Cat
 */

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface
}

interface ClockInterface {
  tick()
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {
    
  }
  tick() {
    console.log('beep beep');
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {
    
  }
  tick() {
    console.log('tick tock');
  }
}

let digital = createClock(DigitalClock, 12, 17)
let analog = createClock(AnalogClock, 7, 32)
digital.tick();
analog.tick();
