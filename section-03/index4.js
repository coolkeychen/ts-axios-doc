/*
 * @Description: 函数类型
 * @Author: Cat
 * @Date: 2021-01-18 17:30:53
 * @LastEditTime: 2021-01-18 17:35:32
 * @LastEditor: Cat
 */
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
