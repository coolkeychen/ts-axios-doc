/*
 * @Description: 函数类型
 * @Author: Cat
 * @Date: 2021-01-18 17:30:53
 * @LastEditTime: 2021-01-18 17:35:32
 * @LastEditor: Cat
 */

interface SearchFunc {
  (source: string, subString: string): boolean
}


let mySearch: SearchFunc
mySearch = function (source: string, subString: string): boolean {
  let result = source.search(subString);
  return result > -1
}