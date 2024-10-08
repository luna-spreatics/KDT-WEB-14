// spread 연산자
// 반복 가능한 객체에 대해서 단일 요소로 압축을 해제하는 역할

// spread in array
const a = [1, 2, 3];
const b = [4, 5];
const spread = [...a, ...b];
console.log(spread); // [1, 2, 3, 4, 5]

// spread in string
const c = [..."hello"];
console.log(c); // ['h', 'e', 'l', 'l', 'o']
const d = "hello".split("");
console.log(d); // ['h', 'e', 'l', 'l', 'o']

// spread in object
const chip = {
  base: "chip",
  company: "lotte",
};

const potatoChip = {
  ...chip,
  flavor: "potato",
};
console.log(potatoChip);

const sweetPotatoChip = {
  ...potatoChip,
  flavor: "sweet potato",
};
console.log(sweetPotatoChip);

const word1 = "abc";
const word2 = "xyz";
console.log([...word1, ...word2]); // ['a', 'b', 'c', 'x', 'y', 'z']
