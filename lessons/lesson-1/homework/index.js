let a = 1, b = 1;
let c = ++a;
let d = b++;

console.log(c, d); //2, 1

let a2 = 2;
let x = 1 + (a2 *= 2); //5

console.log(x);

console.log("" + 1 + 0); //10
console.log("" - 1 + 0); //-1
console.log(true + false); //1
console.log(6 / "3"); //2
console.log("2" * "2"); //4
console.log(4 + 5 + "px"); //9px
console.log("$" + 4 + 5); //$45
console.log("4" - 2); //2
console.log("4px" - 2); //NaN
console.log(" -9 " + 5); //-9 5
console.log(null + 1); //1
console.log(undefined + 1); //NaN
console.log(" \t \n" - 2); //-2

console.log(5 > 4); //true
console.log("apple" > "pinaple"); //false
console.log("2" > "12"); //true
console.log(undefined == null); //true
console.log(undefined === null); //false
console.log(null == "\n0\n"); //false
console.log(null === +"\n0\n"); //false

console.log(null || 2 || undefined); //2

console.log(console.log(1) || 2 || console.log(3)); //1 2

console.log(1 && null && 2); //null

console.log(console.log(1) && console.log(2)); // 1 undefined

console.log(null || 2 && 3 || 4); //3
















