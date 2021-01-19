/*
 * @Description: 混合类型
 * @Author: Cat
 * @Date: 2021-01-19 14:44:23
 * @LastEditTime: 2021-01-19 14:50:24
 * @LastEditor: Cat
 */
function getCounter() {
    var counter = (function (start) { });
    counter.interval = 123;
    counter.reset = function () {
    };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
console.log(c.interval);
