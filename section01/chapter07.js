// 1. 대입 연산자
let var1 = 10;


// 2. 산술 연산자
let num1 = 1 + 2;
let num2 = 1 - 2;
let num3 = 1 * 2;
let num4 = 1 / 2;
let num5 = 1 % 2;

let num6 = (1 + 2) * 10;  //  30


// 3. 복합 연산자
let num7 = 10;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 10;


// 4. 증감 연산자
let num8 = 10;
num8++;  //후위 연산
++num8;  //전위 연산


// 5. 논리 연산자
let or = true || false;

let and = true && false;

let not = !true;


// 6. 비교 연산자
let comp1 = 1 === 2;  //  ===은 자료형까지 비료
let comp2 = 1 !== 2;

let comp3 = 1 < 2;
let comp4 = 1 > 2;

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
console.log(comp1, comp2)