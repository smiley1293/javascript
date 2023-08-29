/**
 * *Câu lệnh if-else
 * 
 */
/**
 * 0  --> false
 * false  --> false
 * '' - ""  --> false
 * undefined  --> false
 * NaN  --> false
 * null --> false
 */
var isSuccess = null;
if(isSuccess){ 
    console.log('Điều kiện đúng')
}else{
    console.log('Điều kiện sai')
}

//Với biể thức điều kiện đc nhập vào trong dấu ngoặc, nó sẽ tự chuyển đổi sang kiểu dữ liệu boolean 

/**
 * *Toán tử logic
 * 1. && - And
 * 2. || - Or
 * 3. ! - Not
 */

// var a = 1;
// var b = 2;
// var c = 3;

// if (a>0 && b>0){
//     console.log('Điều kiện đúng')
// }

/**
 * ?Kiểu dữ liệu trong JavaScript
 * 
 * *1. Dữ liệu nguyên thủy - Primitive Data
 *      - Number
 *      - String
 *      - Boolean
 *      - Undefined
 *      - Null
 *      - Symbol
 * 
 * *2. Dữ liệu phức tạp - Complex Data
 *      - Function
 *      - Object
 */

//?Number type
var a  = 1;
var b = 2;
var c = 1.5;
// *kiểm tra kiểu dữ liệu
console.log(typeof a)

//?String type
var fullName = 'Mai \"Viet'

//?Boolean
var isSuccess = true;

//?Undefined type
var age;

console.log(age)

//?Null
var isNull = null; //null

console.log(typeof isNull)
//?Symbol
var id = Symbol('id'); //unique
var id2 = Symbol('id');
console.log(id)

//?Function
var myFunction = function(){
    alert('Hi. Xin chào các bạn')
}
myFunction();

//?Object types

var  myObject = {
    name: "Trong Viet",
    age: 20,
    address: 'Ha Noi',
    myFunction: function() {

    }
}
// console.log(myObject)

var myArray = [
    'JavaScript',
    'PHP',
    'Ruby'
];
console.log(myArray)
// key đc đánh tự động, số thì tự tăng