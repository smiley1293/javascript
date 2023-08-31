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

var languages2 = new Array(
   'JavaScript',
   'PHP',
   'Ruby',
);

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