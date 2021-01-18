var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// 闭包
function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    };
}
var g = f();
console.log(g());
function f1(shouldInitialize) {
    if (shouldInitialize) {
        var x = 10;
    }
    return x;
}
console.log(f1(true));
console.log(f1(false));
// 矩阵
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var j = 0; j < currentRow.length; j++) {
            sum += currentRow[i];
        }
    }
    return sum;
}
var matrix = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log(sumMatrix(matrix));
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
    return b;
}
var b;
f3();
function foo(condition, x) {
    if (condition) {
        var x_1 = 100;
        return x_1;
    }
    return x;
}
console.log(foo(false, 99));
var numLivesForCat = 9;
var kitty = {
    name: 'hua',
    numLives: numLivesForCat
};
/*
kitty = {
  name: 'cat',
  numLives: numLivesForCat--
} */
kitty.name = 'cat';
kitty.numLives = numLivesForCat--;
console.log(kitty.name);
console.log(kitty.numLives);
var _a = [1, 2, 3, 4], second = _a[1], fourth = _a[3];
console.log('second', second);
console.log('fourth', fourth);
var o = {
    a: 'foo',
    b: 12,
    c: 'bar'
};
// let {d, f}: { a: string, b: number} = o;
// console.log('a.string',d);
// console.log('b.number',f);
var a = o.a, pass = __rest(o, ["a"]);
console.log('a', a);
console.log('pass', pass);
var first = [1, 2, 3];
var hh = [4, 5, 6];
var bothPlus = __spreadArrays([0], first, hh);
console.log('bothPlus', bothPlus);
var defaults = {
    food: 'spicy',
    price: '$10',
    ambiance: 'noisy'
};
// let search = { food: 'rice', ...defaults}
var search = __assign(__assign({}, defaults), { food: 'rice' });
console.log('search', search);
