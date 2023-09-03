var array = ['a','b','c','a','a','c'];
var array = ['a','b','c'];

console.log([...(new Set(array))])
// Trả về thằng đối tượng Set
// dấu 3 chấm là spread ES6, rải các đối tượng vào trong mảng


// 1. Xác định được điểm dừng
// 2. Logic handle => Tạo ra điểm dừng 

function countDown(num) {
   if(num > 0){
      console.log(num)
      return countDown(num-1)
   }
   return num;
}
countDown(10)

function loop(start, end, cb){
   if(start <= end) {
      cb(start)
      return loop(start +  1, end, cb)
   }
}

var arrays = ['Javascript', 'PHP', 'Ruby']

loop(0, arrays.length -1, function(index){
   console.log('Index:', index)
})