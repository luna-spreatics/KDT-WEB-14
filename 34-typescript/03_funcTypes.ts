function print(a: number, b: number, c?: number): void {
  console.log("print() 출력 결과");
  console.log(a);
  console.log(b);
  console.log(c);
}
print(2, 4, 6);
print(2, 4); // 2, 3, undefined

function print2(a: number, b: number, c = 100): void {
  console.log("print() 출력 결과");
  console.log(a);
  console.log(b);
  console.log(c);
}
print2(2, 4, 6);
print2(2, 4);

// string 리턴
function sayHello(): string {
  return "Hello~";
}
function concatString(x: string, y: string) {
  return x + y;
}
// number 리턴
function squareArea(x: number, y: number): number {
  return x * y;
}
const circleArea = (r: number): number => {
  return r * r * Math.PI;
};

// interface 정의 시 함수 타입 표현
interface Greet {
  name: string;
  hi(): string;
  bye(a: number): string;
}

const std: Greet = {
  name: "gildong",
  hi() {
    return "안녕" + this.name;
  },
  bye(a: number) {
    return `작별 인사 ${a}번 하기`;
  },
};

console.log(std.bye(5));

// never
// : 함수의 끝에 절대 도달하지 않는 경우
function goingOn(): never {
  while (true) {
    console.log("go");
  }
}
