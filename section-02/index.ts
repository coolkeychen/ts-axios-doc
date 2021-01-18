// 闭包
function f() {
  var a = 10;
  return function g() {
    var b = a + 1
    return b
  }
}

var g = f();
console.log(g())

function f1(shouldInitialize) {
  if (shouldInitialize) {
    var x = 10;
  }
  return x
}

console.log(f1(true))
console.log(f1(false))


// 矩阵
function sumMatrix( matrix ) {
  var sum = 0
  for (var i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    for (var j = 0; j < currentRow.length; j++) {
      sum += currentRow[i]      
    }
  }
  return sum
}

var matrix = [
  [1,2,3],
  [4,5,6]
]

console.log(sumMatrix(matrix))


// 
/* for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i)
    }, 300 * i);
} */

/* for (var i = 0; i < 10; i++) {
  (function (i) {
    setTimeout(() => {
      console.log(i)
    }, 300 * i);
  })(i)
} */

/* for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log('i',i)
  }, 100 * i);
  
} */

// 暂行性死区
function f3() {
  return b
}

let b;
f3();

function foo(condition, x) {
  if (condition) {
    let x = 100
    return x
  }
  return x
}

console.log(foo(false, 99))



let numLivesForCat = 9

const kitty = {
  name: 'hua',
  numLives: numLivesForCat
}
/* 
kitty = {
  name: 'cat',
  numLives: numLivesForCat--
} */
kitty.name = 'cat'
kitty.numLives = numLivesForCat--
console.log(kitty.name);
console.log(kitty.numLives);


let [,second,,fourth] = [1,2,3,4]
console.log('second',second);
console.log('fourth',fourth);


let o = {
  a: 'foo',
  b: 12,
  c: 'bar'
}

// let {d, f}: { a: string, b: number} = o;
// console.log('a.string',d);
// console.log('b.number',f);

let { a, ...pass } = o
console.log('a',a);
console.log('pass',pass);


let first = [1,2,3]
let hh = [4,5,6]
let bothPlus = [ 0 , ...first , ...hh]
console.log('bothPlus',bothPlus);

let defaults = {
  food: 'spicy',
  price: '$10',
  ambiance: 'noisy'
}

// let search = { food: 'rice', ...defaults}
let search = { ...defaults, food: 'rice'}
console.log('search',search);

