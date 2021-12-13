/**
 * 分割代入
 */

const myProf = {
  name: "alta7v",
  age: 30
};

const message1 = `名前は${myProf.name}です。${myProf.age}です`;
console.log(message1);

const { name, age } = myProf;
const message2 = `名前は${name}です。${age}です`;
console.log(message2);

const myProf2 = ["alta7v", 30];

const message3 = `名前は${myProf2[0]}です。${myProf2[1]}です`;
console.log(message3);

const [name2, age2] = myProf2;
const message4 = `名前は${name2}です。${age2}です`;
console.log(message4);
