/**
 * スプレッド構文 ...
 */

// 配列の展開
const ary1 = [1, 2];
console.log(ary1);
console.log(...ary1);

const sum = (num1, num2) => console.log(num1 + num2);
sum(ary1[0], ary1[1]);
sum(...ary1);

// まとめる
const ary2 = [1, 2, 3, 4, 5];
const [num1, num2, ...num3] = ary2;
console.log(num1);
console.log(num2);
console.log(num3);

// 配列のコピー、結合
const ary3 = [10, 20];
const ary4 = [30, 40];

const ary5 = [...ary3];
console.log(ary5);

const ary6 = [...ary3, ...ary4];
console.log(ary6);

// ダメ 参照渡し
const ary8 = ary3;
console.log(ary8);
ary8[0] = 100;
console.log(ary8);
console.log(ary3);
