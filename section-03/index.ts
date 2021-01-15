/*
 * @Description: TypeScript 的核心原则之一是对值所具有的结构进行类型检查，接口
 * @Author: Cat
 * @Date: 2020-11-06 17:44:01
 * @LastEditTime: 2021-01-15 16:58:04
 * @LastEditor: Cat
 */

// 接受一个拥有 label 属性且值为字符串类型的参数
interface LabelledValue {
  label: string
}
function printLabel(labelValueObj : LabelledValue) {
  console.log(labelValueObj.label);
}

// 压式变形法
let myObj = { size: 10 , label: 'Size 10 Object'}
printLabel(myObj)