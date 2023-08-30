//*LÀM VIỆC VỚI CHUỖI

var myString = '   Học JS tại JS F8';

// 1. Length
console.log(myString.length);
// 2. Find index
console.log(myString.indexOf('JS',6 )) //tìm tiếp từ vị trí số 6 sau chữ JS
console.log(myString.lastIndexOf('JS'))
console.log(myString.search('JS')) //hỗ trợ tìm kiếm theo biểu thức chính quy
// 3. Cut string
console.log(myString.slice(0,4))// cắt ngược thì dùng số âm đếm từ 0
// 4. Replace
console.log(myString.replace('JS', 'JavaScript'))
console.log(myString.replace(/JS/g, 'JavaScript')) //biểu thức chính quy chọn tất cả các chuỗi JS trong câu
// 5. Convert to upper case
console.log(myString.toUpperCase())
// 6. Convert to lower case
console.log(myString.toLowerCase())
// 7. Trim
console.log(myString.trim()); //xóa dấu cách ở đầu cuối
// 8. Split: cắt 1 chuỗi thành array
var languages = 'JavaScript, PHP, Ruby'

console.log(languages.split(''))
// 9. Get a character by index
const myString2 = 'Viet dubai';
console.log(myString2.charAt(2)); //hoặc
console.log(myString2[10]); //trả về undefined, khác với charAt trả về chuỗi rỗng
