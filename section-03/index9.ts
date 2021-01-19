/*
 * @Description: 混合类型
 * @Author: Cat
 * @Date: 2021-01-19 14:44:23
 * @LastEditTime: 2021-01-19 14:50:24
 * @LastEditor: Cat
 */

interface Counter {
  (start: number): string
  interval: number
  reset(): void
}

function getCounter(): Counter {
  let counter = (function (start: number) { }) as Counter
  counter.interval = 123
  counter.reset = function() {

  }
  return counter
}

let c = getCounter()
c(10)
c.reset()
c.interval = 5.0
console.log(c.interval)