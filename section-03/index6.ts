/*
 * @Description: 类类型
 * @Author: Cat
 * @Date: 2021-01-19 13:58:39
 * @LastEditTime: 2021-01-19 14:08:31
 * @LastEditor: Cat
 */

interface ClockInterface {
  currentTime: Date
  setTime(d: Date)
}

class Clock implements ClockInterface {
  currentTime: Date
  constructor(h: number, m: number) {
    
  }

  setTime(d: Date) {
    this.currentTime = d
  }
}
