let num = 10;
let str = "20";

const result = num + str;


let str1 = "10";
let strToNum = Number(str1);

let str2 = "10개";
let strToNum2 = Number(str2);  //  NaN

let str3 = "10개";
let strToNum3 = parseInt(str3);  //  10

let str4 = "개10개";
let strToNum4 = parseInt(str4);  //  NaN


let num1 = 10;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다.");

