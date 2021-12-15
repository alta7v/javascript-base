/**
 * 論理演算子
 */

const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log("どちらかがtrueです");
}

if (flag1 && flag2) {
  console.log("どちらもtrueです");
}

// || は 左側がfalseの時 右側を返す
const num = null;
const fee = num || "金額未設定です";
console.log(fee);

// && は 左側がtrueの時 右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
