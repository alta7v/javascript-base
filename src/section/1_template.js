/**
 * テンプレート文字列
 */

const name = "alta7v";
const age = "30";

// 従来
const message1 = "私の名前は" + name + "です. 年齢は" + age + "です";
console.log(message1);

// テンプレート文字列
const message2 = `私の名前は${name}です. 年齢は${age}です`;
console.log(message2);
