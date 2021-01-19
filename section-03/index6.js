/*
 * @Description: 类类型
 * @Author: Cat
 * @Date: 2021-01-19 13:58:39
 * @LastEditTime: 2021-01-19 14:08:31
 * @LastEditor: Cat
 */
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
