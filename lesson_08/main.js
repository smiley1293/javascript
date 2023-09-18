/**
 * *CHUỖI TRONG JAVASCRIPT
 * 
1. Tạo chuỗi:
      - Các cách tạo chuỗi
      - Nên dùng cách nào? Lý do?
      - Kiểm tra data type?
2. Một số case sử dụng backslash (\)
3. Xem độ dài chuỗi
4. Chú ý độ dài khi viết code
5. Template string ES6

*/

// ?var fullName = new String('Trọng Việt');
//ko nên dùng cách này, dài dòng hơn
//từ khóa new sẽ khởi tạo 1 đối tượng, tạo ra 1 instance
//kiểu dữ liệu tạo ra ko mong muốn


var fullName = 'Việt là học \'sinh';

console.log(fullName.length);

var firstName = 'Viet';
var lastName = 'Trong'

// Template string ES6
console.log(`Tôi là: ${firstName} ${lastName}`)
var a = 'Tụt đáng yêu';

if(typeof a === 'string'){
      console.log("Đúng nó là chuỗi đó");
}else{
      console.log("Không đúng nó là chuỗi đó");
}
(typeof a === 'string') ? console.log('Chuỗi đó'):console.log('Gà')


