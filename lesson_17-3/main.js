const numbers = [1, 2, 3, 4, 5]

const result = numbers.reduce((total, number) => {
   return total + number
})
// const results = numbers.reduce(callback, initialValue, currentIndex, originArray)
console.log(result)

// Thêm phương thức cho mảng
Array.prototype.reduce2 = function (callback, result) {
   for (let i = 0; i < result.lenth; i++) {
      result = callback(result, this[i], i, this)
   }
}



// Expected results:
var arr = [
   ['name', 'Sơn Đặng'],
   ['age', 18],
];
function arrToObj() {
   var results = arr.reduce(function (result1, resultItem) {
      result1[resultItem[0]] = resultItem[1];
      return result1
   }, {})
   return results
   console.log(results)
}
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

// * includes() method: chỉ có trong thằng array và String

var title = 'Responsive web design'

console.log(title.includes('web', 1)) //bắt đầu tìm từ vị trí số 1 trong chuỗi

var languages = ['JavaScript','PHP','Dart']

console.log(languages.includes('PHP',-1)) //bắt đầu tìm từ vị trí số 1 trong mảng
// Độ dài của mảng + số âm truyền vào(nếu số âm sau khi công j với độ dài mảng mà vẫn còn âm thì nó auto mặc định là từ 0)