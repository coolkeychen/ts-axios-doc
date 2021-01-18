/*
 * @Description: 接口可选属性: 可选属性一个好处就是可以对参数做预定义，另一个好处就是捕获参数的错误
 * @Author: Cat
 * @Date: 2021-01-18 15:42:12
 * @LastEditTime: 2021-01-18 15:56:58
 * @LastEditor: Cat
 */
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'black' });
console.log(mySquare);
