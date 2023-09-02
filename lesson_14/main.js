/**
 * *Vòng lặp - Loop
 * 
 * 1. For - lặp với điều kiện đúng
 * 2. for/in - Lặp qua key của đối tượng
 * 3. for/of -  Lặp qua value của đối tượng
 * 4. while - Lặp khi điều kiện đúng
 * 5. do/while - Lặp ít nhất 1 lần
 *       lặp khi điều kiện đúng
 */


// ?For loop
var myArray = [
   'JavaScript',
   'PHP',
   'Java',
   'Dart',
]

var arrayLength = myArray.length;
for (var i = 0; i < arrayLength; i++) {
   console.log(myArray[i])

}

// function getTotal(arr) {
//    var sum = 0;
//    for (var i = 0; i < arr.length; i++) {
//       sum += arr[i];
//    }
//    return sum;
// }

// Expected results
// console.log(getTotal([1, 2, 3])) // Output: 6
// console.log(getTotal([4, 5, -3])) // Output: 6
// console.log(getTotal([4, 5, 3, 5])) // Output: 17

var orders = [
   {
      name: 'Khóa học HTML - CSS Pro',
      price: 3000000
   },
   {
      name: 'Khóa học Javascript Pro',
      price: 2500000
   },
   {
      name: 'Khóa học React Pro',
      price: 3200000
   }
]
var orderLength = orders.length;
function getTotal() {
   var sum = 0;
   for (var i = 0; i < orderLength; i++) {
      sum += orders[i].price
   }
   return sum;
}



// Expected results:
console.log(getTotal(orders)) // Output: 8700000

//* For/in loop

var myInfo = {
   name: 'Trong Viet',
   age: 18,
   address: 'Ha noi',
}
// Nếu truyền key chính xác thì dùng dạng chuỗi: myInfo['name'], còn nếu dùng var key in thì chỉ cần myInfo[key]
for (var key in myInfo) {
   console.log(myInfo[key])
}


var languages = [
   'JavaScript',
   'PHP',
   'Ruby',
]

for (var iKey in languages) {
   console.log(languages[iKey])
}

function run(object) {
   var result = [];
   for (var key1 in object) {
      var props = object[key1]
      result.push(`Thuộc tính ${key1} có giá trị ${props}`)
   }
   return result;
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));


// * For/of loop
var ngonngu = [
   'JavaScript',
   'PHP',
   'Java',
]

for(var value of ngonngu){
   console.log(value)
}
// Đối với chuỗi thì nó log đã đc từng chữ cái trong chuỗi đó

// Cách lấy key cảu 1 object cho vào trong 1 mảng
console.log(Object.values(myInfo))
console.log(Object.keys(myInfo))
for(var values of Object.keys(myInfo)){
   console.log(myInfo[values])
}


// *Vòng lặp while

var i = 0;

while(i<myArray.length){
   
   console.log(myArray[i])
   i++;
}

// * do/while loop

var a = 0;
var isSuccess = false;
do{
   a++;

   console.log('Nạp thẻ lần ' + a)
   // code
   //? Thành công
   // if(true) {
   //    isSuccess = true;
   // }

   //? Thất bại
   if(false){
      isSuccess = true;
   }
}while(!isSuccess && a < 3);


// * Break & Continue in loop

for(var c = 0; c < 10;c++){
   if(c % 2 !== 0){
      continue //tiếp tục và bỏ qua
   }
   console.log(c)

   // if(c >=5){
   //    break;
   // }
}

//* Vòng lặp lồng nhau - Nested loop
var array = [
   [1,2],
   [3,4],
   [5,6]
]

for(var d = 0;d < array.length;d++){
   for(var e = 0;e < array[d].length;e++){
      console.log(array[d][e])
   }
   console.log(array[d])
}


// *Loop...
for(var f = 100;f > 0;f--){
   console.log(f)
}

for(var g = 100;g>=0;g -=5){
   console.log(g)
}