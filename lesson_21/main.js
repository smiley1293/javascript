// ES6 là 1 quy chuẩn, sinh ra để tạo ra tiêu chuẩn cho js, 
// 1. Let, const
// 2. Template Literals
// 3. Multi-line String
// 4. Arrow Function
// 5. Classes
// 6. Default parameter values
// 7. Destructuring
// 8. Rest parameters
// 9. Spread
// 10. Enhanced object literals
// 11. Tagged template literal
// 12. Modules

//* 1. Var / Let, Const: Scope, Hosting
// 2. Const / Var, Let: Assignment, ko thể gán lần 2 bằng toán tử với const

// Code block: if else, loop, {},...
// Let, const phải trong cùng 1 code block mới truy cập đc: nếu cùng tên, ưu tiên lấy thằng gần nhất

// if (true){
//    var course = 'JavaScript basic'
// };
// Hoisting: đưa lên(chỉ có var đc hỗ trợ), móc ngược

a = 11;

var a;
console.log(a)

// const a = {
//    name: 'JS'
// }

// a.name = 'PHP' // vẫn gán đc, vì trong đây ta gán cho thuộc tính name


// Điểm giống nhau là định nghĩa các biến
// Điểm khác nhau là phạm vi truy cập, var đc ngoài code block còn 2 thằn còn lại thì ko, và var đc hoisting
// COnst ko cho phép gán toán tử lần thứ 2
// Code thuần: Var
// Babel: Const, Let: 
// dùng khi định nghĩa biến và ko gán lại biến đó => const
// khi cần gán lại giá trị cho biến => let


// *2. Template Literals 
const courseName = 'JavaScript';
const courseName2 = 'PHP';
const description = `Course Name: ${courseName} ${courseName2} \\ \n \${}` //nội suy

console.log(description)

// *3. Multi-line String

const lines = `Line 1
Line 2
Line 3
Line 4
`
console.log(lines)

// *4. Arrow Function
const logger = log => console.log(log) //chỉ dành cho 1 tham số nhận


logger('Hello')

const sum = (a, b) => a + b;
const sum1 = (a, b) => ({a:a,b:b});

console.log(sum(1, 2))
console.log(sum1(1, 2))

const course = {
   name:'JavaScript',
   getName: function(){
      return this.name;
   }
   // arow function ko đc dùng làm function constructor
}

const Course = function(name, price){
   this.name = name;
   this.price = price;
}

const jsCourse = new Course('JavaScript',120)

console.log(jsCourse)