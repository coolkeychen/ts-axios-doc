let isDone: boolean = false
console.log('isDone', isDone);

let decLiteral: number = 20
let hexLiteral: number = 0x14
let binaryLiteral: number = 0b10100
let octalLiteral: number = 0o24


console.log('octalLiteral',octalLiteral);
console.log('decLiteral',decLiteral);
console.log('hexLiteral',hexLiteral);
console.log('binaryLiteral',binaryLiteral);

let fullname: string = 'john'
fullname = 'cat'

console.log('fullname',fullname)

let list: number[] = [1,2,3]
console.log('list',list);

let x: [string,number]
x = ['hello',10]
// 越界元素
x[3] =1
console.log('x',x);