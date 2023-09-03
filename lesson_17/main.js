var courses = [
   {
      id: 1,
      name: 'JavaScript',
      coin:250
   },
   {
      id: 2,
      name: 'HTML + CSS',
      coin:250
   },
   {
      id: 3,
      name: 'Ruby',
      coin:0
   },
   {
      id: 4,
      name: 'PHP',
      coin:400
   },
   {
      id: 5,
      name: 'ReactJS',
      coin: 500
   },
]

// Reduce

// Tìm ra tổng giá trị giá của các khóa học
// Biến lưu trữ 
// var totalCoin = 0;
// // Lặp qua các phần tử
// for(var course of courses){

//    // Thực hiện việc lưu trữ
//    totalCoin += course.coin;
// }
// console.log(totalCoin)

// *Biến lưu trữ
// *Thực hiện việc lưu trữ
var i = 0;
function coinHandler(accumulator, currentValue, currentIndex, originArray){ //biến này là biến lưu trữ
   i++;

   var total = accumulator + currentValue.coin;
   console.table({
      'Lượt chạy: ': i,
      'Biến tích trữ': accumulator,
      'Giá khóa học': currentValue.coin,
      'Tích trữ': total,
   })
   return total;
}

//Đối số đầu tiên phải là function, đối số thứ 2 là giá trị khởi tạo(gán cho thằng accumulator bên trên)
var totalCoin = courses.reduce(coinHandler, 0) //mỗi lần lặp qua 1 phần tử của mạng sẽ gọi 1 lần
console.log(totalCoin)