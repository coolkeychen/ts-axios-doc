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

// 元祖
let x: [string,number]
x = ['hello',10]
// 越界元素
// x[3] = 'cat'
console.log('x',x);

// 枚举
enum Color {Red = 2, Green, Blue}
let c: Color = Color.Green
console.log('c',c);

// 枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为 2，但是不确定它映射到 Color 里的哪个名字，我们可以查找相应的名字：
let colorName: string = Color[2]
console.log('colorName',colorName);


// any
// 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库
// 在对现有代码进行改写的时候，any 类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查
let notSure : any = 4
notSure = 'maybe a string instead'
notSure = false
console.log('notSure', notSure);

let list2 : any[] = [1,true,false]
list2[1] = 100;
console.log('list2',list2)

// void
// 表示没有任何类型
function warnUser(): void {
  console.log('This is my warning message')
}

// null 和 undefined
let n: null = null
let u: undefined = undefined
console.log('n',n);
console.log('u',u);


// never

// object
// declare function create(o: object | null) : void 

// create({props: 0})
// create(null)
// create(32)
// create(false)


// never
function error(message: string):never {
  throw new Error(message)
}

function fail() {
  return error('something fail')
}

// 类型断言
let someValue: any = 'this is a string'
let stringLength: number = (someValue as string).length
console.log('stringLength',stringLength);

