/**
 * const let の宣言
 */

// var val1 = "var";
// console.log(val1);
// // var 上書き可能
// val1 = "var 上書き";
// console.log(val1);
// // var 再宣言
// var val1 = "var 再宣言";
// console.log(val1);

let val2 = "let";
console.log(val2);
// let 上書き可能
val2 = "let 上書き";
console.log(val2);
// let 再宣言不可能
//let val2 = "let 再宣言";

const val3 = "const";
console.log(val3);
// const 上書き不可能
//val3 = "const 上書き";
// const 再宣言不可能
//const val3 = "const 再宣言";

// const 配列 辞書 は 変更 できてしまう
const val4 = {
  num1: 10,
  num2: 20
};
//console.log(val4);
val4.num1 = 30;
//console.log(val4);
val4.num4 = 40;
console.log(val4);

const val5 = [1, 2, 3];
val5[0] = 10;
val5[3] = 40;
val5.push(50);
console.log(val5);
