//* 5. Classes
// function Course(name, price) {
//    this.name = name;
//    this.price = price;
// }

class Course {
   constructor(name, price) {
      this.name = name;
      this.price = price;
   }

   getName() { return this.name; }

   getPrice() { return this.price; }
}

const phpCourse = new Course('PHP', 1000);
const jsCourse = new Course('JavaScript', 1000);

console.log(phpCourse);
console.log(jsCourse);

// *Default parameter values
function logger(log, type  = 'log') {
   console[type](log);
}

logger('Hello','warn');

// function logger(log = 'Giá trị mặc định') {
//    console[type](log);
// }

// logger('Hello','warn');


// *Enhanced object literals
// +Định nghĩa key value cho object 
// +Định nghĩa method cho object
// +Định nghĩa key cho Object dưới dạng biến

var name = 'JavaScript';
var price = 1000;

var course = {
   name,
   price,
   getName(){
      return name;
   }
}

console.log(course.getName());

var fieldName = 'name-moi';
var fieldPrice = 'price';

const course1 = {
   [fieldName]: 'JavaScript',
   [fieldPrice]: 1000
}
console.log(course1);

//* Destructuring: phân rã
var array = [
   'JavaScript',
   'PHP',
   'Ruby'
]

// var [a,b,c] = array;
//? cách cũ
// var a = array[0];
// var b = array[1];
// var c = array[2];

// console.log(a,b,c);
// *Rest: lấy ra những phần còn lại
var [a,...rest] = array;

console.log(rest);

var course2 = {
   name:'JavaScript',
   price: 1000,
   image: 'http://',
   children:{
      name:'ReactJS',
   }
}

// var {name: parentName, children:{name:chidrenName}, ...rest} = course2 //đối với object phải gọi đúng tên
var {name, description= 'Chưa có nhá'} = course2 //đối với object phải gọi đúng tên
// console.log(parentName,price,chidrenName);
// console.log(rest);
console.log(description);

function logger(...parameters) { //trường hợp này cũng là rest
   console.log(parameters)
}

console.log(logger(1,2,3,4,5,6,7,8,9,10,11,12));
