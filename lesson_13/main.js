// * Câu lệnh rẽ nhánh - If else

var date = 2;

if (date === 2) {
   console.log('Hôm nay là thứ 2')
} else if (date === 3) {
   console.log('hôm này là thứ 3')
}

// cú pháp short hand
let x = 10;
let results = (x > 5) ? "x lớn hơn 5" : "x nhỏ hơn hoặc bằng 5";
console.log(results);


// * Câu lệnh rẽ nhánh - Switch case

switch (date) {
   case 2:
      console.log('Thứ 2')
      break;
   case 3:
      console.log('Thứ 3')
      break;
   case 4:
      console.log('Thứ 4')
      break;
   case 5:
      console.log('Thứ 5')
      break;
   case 6:
      break;
   default:

}

// Phải có break, vì tình từ case đúng nó sẽ lọt tiếp vào các case phía dưới

// *Toán tử 3 ngôi - Ternary operator

var course = {
   name: 'Javascript',
   price:250
}
// if(course.price > 0) {
//    console.log(`${course.price} Coins`)
// }else{
//    console.log('Miễn phí')
// }

var result = course.price > 0 ? `${course.price} coins` : 'Free'
console.log(result)

var a = 1;
var b = 2;

var c = a > 0 ? a : b;