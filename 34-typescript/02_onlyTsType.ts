// only typescript type

// Tuple
let drink: [string, string] = ["사이다", "롯데"];
drink[0] = "cider";
drink[1] = "lotte";
// drink.push("wow"); // 동작이 됨 -> tuple의 한계
console.log(drink);

// readonly : 요소 타입 순서와 길이 고정
let drink2: readonly [string, number] = ["사이다", 2000];
// drink2.push // error

/////////////////////////////////////////////////

// Enum
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = "아메리카노",
  latte = "카페라테",
}

console.log(Auth.admin); // 0
console.log(Cafe.americano);

enum Cake {
  choco,
  vanilla,
  lemon = "레몬",
  strawberry = "딸기",
}

console.log(Cake.choco, Cake.vanilla, Cake.lemon); // 0

/////////////////////////////////////

// any
// 명시적으로
let val: any;
val = true;
val = 10;
val = "string";

// 암묵적으로
let val2;
val2 = false;
val2 = 10;

///////////////////////////////////////

// 사용자 정의 타입 : type & interface

// 1. interface
interface Student {
  name: string;
  isPassed: boolean;
}
const student1: Student = {
  name: "홍길동",
  isPassed: true,
  // addr: 'seoul'
};

const student2: object = {
  name: "홍길동",
  isPassed: true,
  addr: "seoul",
};

// interface 상속
enum Score {
  Aplus = "A+",
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  F = "F",
}

interface BaseballClub extends Student {
  position: string;
  height: number;
  readonly backNumber?: number; // ? : 있어도 되고 없어도 됨
  [grade: number]: Score;
}

const baseballStudent: BaseballClub = {
  name: "otani",
  isPassed: true,
  position: "pitcher",
  height: 190,
  backNumber: 17,
  1: Score.B,
  2: Score.A,
};

// baseballStudent.backNumber = 3
console.log(baseballStudent);

///// 2. Type
type Bp1 = 500 | 700 | 1000;
enum Bp2 {
  SM = 500,
  MD = 700,
  LG = 1000,
}

const width1: Bp1 = 1000;
const width2: Bp2 = Bp2.SM;

// 교차 타입 : 두개 이상의 타입을 합치는 것
interface Toy {
  name: string;
  start(): void;
}

interface Car {
  name: string;
  color: string;
  price: number;
}

type ToyCar = Toy & Car;

const toyCar: ToyCar = {
  name: "tayo",
  start() {
    console.log("출발~");
  },
  color: "blue",
  price: 5000,
};

type Gender = "F" | "M";
type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: Gender;
};
