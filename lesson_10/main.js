/**
 * *Kiểu số (Number) trong JavaScript
 * 
 * 1. Tạo giá trị Number
 *    - Các cách tạo
 *    - Dùng cách nào? Tại sao?
 *    - Kiểm tra Data type
 * 
 * 2. Làm việc với Number
 *    - To string 
 *    - To Fixed 
 */

// Keyword:  

var age = 18;
var PI = 3.14;

var otherNumber = new Number(9);

var result = 20/ 'ABC'
console.log(isNaN(result)) //NaN đại diện cho kiểu số ko hợp lệ

console.log(typeof age.toString())
// làm tròn số thập phân 
console.log(PI.toFixed(1));


function isNumber(value) {
   if((typeof value === 'number') == true && isNaN(value)==false){
      return true;
   }else{
      return false;
   } ;
} 

// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false