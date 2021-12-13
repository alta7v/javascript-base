/**
 *アロー関数
 */

//従来
function fn1(str) {
  return str;
}
console.log(fn1("fn1"));
const fn2 = function (str) {
  return str;
};
console.log(fn2("fn2"));

// Arrow
const fn3 = (str) => {
  return str;
};
console.log(fn3("fn3"));
// 一行で記述が終わる場合
const fn4 = (str) => str;
console.log(fn4("fn4"));

// Args 2
const fn5 = (num1, num2) => num1 + num2;
console.log(fn5(10, 20));
