// *Callback?

// Là hàm (function) được truyền qua đối số khi gọi các hàm khác

// 1. Là hàm
// 2. Được truyền qua đối số
// 3. Được gọi lại(trong hàm nhận đối số)

function myFunction(param) {
   if (typeof param === 'function') {
      param('Hello')
   }
}
// Phải check như trên, nếu ko thì dòng 17 sẽ như vô nghĩa
function myCallback(value) {
   console.log('Value: ', value)
}
myFunction(myCallback)

// * Callback phần 2:
Array.prototype.map2 = function (callback) {
   var output = [];
   var arrayLength = this.length
   for (var i = 0; i < arrayLength; ++i) {
      var result = callback(this[i], i);
      output.push(result)
   }

   return output;
}



var courses = [
   'JavaScript',
   'PHP',
   'Ruby'
];

courses.map2(function (course, index) {
   console.log(index, course)
})

// var htmls = courses.map(function(course){
//    return `
//          <h2>${course}</h2>
//    `
// })
// console.log(htmls.join(''))

