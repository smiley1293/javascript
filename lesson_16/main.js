/**
 *    *Array Method:
 *          forEach()
 *          every()
 *          some()
 *          find()
 *          filter() 
 *          map()
 *          reduce()
 */

var courses = [
   {
      id: 1,
      name: 'JavaScript',
      coin: 250
   },
   {
      id: 2,
      name: 'HTML + CSS',
      coin: 250
   },
   {
      id: 3,
      name: 'Ruby',
      coin: 0
   },
   {
      id: 4,
      name: 'PHP',
      coin: 400
   },
   {
      id: 5,
      name: 'ReactJS',
      coin: 500
   },
]

// ? For each()

courses.forEach(function (course, index) {
   console.log(index, course)
});

// ?Every
var isFree = courses.every(function (course, index) {
   return course.coin === 0;
});
// Kiểm tra xem có phải tất cả khóa học đều free hay không
console.log(isFree)

// ? Some()
// Ngược lại với every, chỉ cần 1 cái thỏa mãn điều kiện thì sẽ trả về true

var isFree = courses.some(function (course, index) {
   return course.coin === 0;
});
// Kiểm tra xem có phải 1 trong  tất cả khóa học đều free hay không
console.log(isFree)

// ?Find
// tìm cái mình muốn, nếu có thì trả về chính phẩn tử đó, còn ko thì trả về undefined

var nameCourse = courses.find(function (course, index) {
   return course.name === 'Ruby';
});
// Fidn này chỉ tìm ra đc 1 thằng đầu tiên
console.log(nameCourse)

// ?Filter: giống find nhưng lại trả về đc tất cả phần tử thỏa điều kiện tìm kiếm


//  map()
function courseHandler(khoaHoc, index, originArray) { //tham số thứ 3 là thằng array gốc
   return {
      id: khoaHoc.id,
      name: `Khóa học: ${khoaHoc.name}`,
      coin: khoaHoc.coin,
      coinText: `Giá: ${khoaHoc.coin}`,
      index: index,
      originArray: originArray,
   }
   // hiển thị view
   //return `<h2>${khoaHoc.name}</h2>`
}

var newCourses = courses.map(courseHandler); //nhận đc số elements bằng vs courses
console.log(newCourses)





// Expected results
console.log(calculateRating(watchList)); // Output: 8.675