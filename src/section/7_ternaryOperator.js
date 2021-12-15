/**
 * 3項演算子
 */

const val1 = 1 > 0 ? "true" : "false";
console.log(val1);

let num1 = 1300;
console.log(num1.toLocaleString()); // 文字列には効かない

const num2 = "1300";
console.log(num2.toLocaleString());

//num1 = "1300";
const formmatedNum =
  typeof num1 === "number" ? num1.toLocaleString() : "数値を入力してください";
console.log(formmatedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? true : false;
};

console.log(checkSum(90, 11));
