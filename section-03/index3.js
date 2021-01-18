/*
 * @Description: 只读属性, 一些对象属性只能在对象刚创建时修改值
 * @Author: Cat
 * @Date: 2021-01-18 15:58:10
 * @LastEditTime: 2021-01-18 16:03:22
 * @LastEditor: Cat
 */
var p1 = { x: 10, y: 20 };
p1.x = 15;
var a = [1, 2, 3, 4];
var ro = a;
ro[0] = 12;
ro.push(5);
ro.length = 100;
a = ro;
