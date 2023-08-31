/**
 * * Mảng trong JavaScript - Array
 * 
 * 1. Tạo mảng
 *       - Cách tạo
 *       - Sử dụng cách nào? Tại sao?
 *       - Kiểm tra data type
 * 2. Truy xuất mảng
 *       - Độ dài mảng
 *       - Lấy phần tử theo index
 */

var languages = [
   'JavaScript',
   'PHP',
   'Ruby',
]


console.log(languages[0])
console.log(languages.length)
console.log(languages2)
console.log(typeof languages)

console.log(Array.isArray(languages))

/**
 * *Làm việc với Array
 * 
 * 1. To string
 * 2. Join
 * 3. Pop
 * 4. Push
 * 5. Shift
 * 6. Unshift
 * 7. Splicing
 * 8. Concat
 * 9. Slicing
 */

console.log(languages.toString())
// Ko khác gì toString, nhưng truyền vào chuỗi rỗng thì nó sẽ xem đó là cái để ngăn cách
console.log(languages.join())
console.log(languages.join('-'))
// ?Pop: xóa element cuối mảng và trả về phần tử đã xóa
// console.log(languages.pop())
console.log(languages)

// ?Push: thêm 1 hoặc nhiều phần tử vào cuối mảng và trả về đọ dài mới của mảng
console.log(languages.push('Dart')) //4
console.log(languages)

// ?Shift: xóa đi 1 phần tử ở đầu mảng và trả về phần tử đã xóa  
// console.log(languages.shift())
console.log(languages)

//?Unshift: thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng
console.log(languages.unshift('Java'))
console.log(languages)

// ?Splicing: xóa hoặc chèn cả phần tử vào mảng
// Xóa: tham số thứ nhất: đặt con trỏ vào vị trí nào | tham số thứ 2: số phần tử xóa từ tham số thứ nhất
console.log(languages.splice(1, 1))
console.log(languages)

// Chèn: cho tham số thứ 2 là 0, để có thể thêm đc tahm số thứ 3 ngày trước con trỏ
languages.splice(1, 0, 'C#', 'HTML')
console.log(languages)


//?Concat: nối chuỗi
var languages2 = [
   'R',
   'C++'
]
console.log(languages.concat(languages2))

//?Slicing: cắt element, 2 tham số thì tham số đầu là vị trí bắt đầu và tham số thứ 2 là vị trí kết thúc
console.log(languages.slice(1, 2))
console.log(languages)

   // Viết hàm tại đây
function getLastElement(array) {
   return array.slice(array.length-1,array.length );
}



// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']