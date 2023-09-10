// 1. Promise.resolve:
// 2. Promise.reject:
// 3. Promise.all: khi 2 thằng ko phục thuộc kết quả của nhau, nhưng chúng ta muốn nó làm việc chung

// Thư viện: output luôn luôn là 1 promise





// var promise = new Promise(
//    function(resolve, reject){
//       // resolve('Thành công')
//       reject('Thất bại')
//    }
// )

// Trong trường hợp cầm chắc thành công
var promise = Promise.resolve('Được ní ơi');

promise
      .then(function(result){
         console.log('result', result)
      })
      .catch(function(err){
         console.log('Result', err)
      })


var promise1 = new Promise(
   function(resolve){
      setTimeout(function(){
         resolve([1]);
      }, 2000)
   }
)

var promise2 = new Promise(
   function(resolve){
      setTimeout(function(){
         resolve([2,3]);
      },5000)
   }
)

Promise.all([promise1, promise2])
   .then(function(result){ //trả về 1 mảng
      var result1 = result[0];
      var result2 = result[1]
      
      console.log(result1.concat(result2))
   })

// viết ES6
Promise.all([promise1, promise2])
   .then(function([result1, result2]){ //trả về 1 mảng
      console.log(result1.concat(result2))
   })
   .catch(function(error){
      console.log(error)
   })