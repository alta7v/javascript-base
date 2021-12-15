/**
 * 配列処理
 * map, filter
 */

// map
const nameAry = ["田中", "山田", "alta7v"];
for (let index = 0; index < nameAry.length; index++) {
  console.log(nameAry[index]);
}

const nameAry2 = nameAry.map((name) => {
  return name;
});
console.log(nameAry2);

nameAry.map((name, index) => console.log(name, index));

// filter
const numAry = [1, 2, 3, 4, 5];
const filterAry = numAry.filter((num) => {
  return num % 2 === 0;
});
console.log(filterAry);
