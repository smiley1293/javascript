/**
 * *Toán tử gán
 * 
 * Toán tử      Ví dụ           Tương đương
 * =            x = y           x = y
 * +=           x += y          x = x+y
 * -=           x -= y          x = x - y
 * *=           x *= y          x = x * y
 * /=           x /= y          x = x / y
 * **=          x **= y         x = x**y
 * 
 */

// var a = 1;
// a+= 2;

// console.log(a);

// ?Toán tử chuỗi - String operator
// var firstName = 'Viet';
// var lastName = 'Mai';

// console.log(firstName +" "+ lastName);

/**
 * *Toán tử so sánh
 * 
 * ==       -->     Bằng
 * !=       -->     Không bằng
 * >        -->     Lớn hơn
 * <        -->     Nhỏ hơn
 * >=       -->     Lớn hơn hoặc bằng
 * <=       -->     Nhỏ hơn hoặc bằng
 */

/**
 * *Boolean
 */
var a1 = 1;
var b1 = 2;

var isSuccess = a1 > b1;

console.log(isSuccess)
// Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị true thì ta gọi giá trị đó là Truthy.

// ?Các giá trị 1, ['BMW'], { name: 'Miu' } và 'hi' được đề cập trong ví dụ dưới đây là Truthy vì khi chuyển sang Boolean ta nhận được giá trị true.

// Ví dụ:

console.log(Boolean(1)) // true
console.log(Boolean(['BMW'])) // true
console.log(Boolean({ name: 'Miu' })) // true 

console.log(!!'hi') // true
//?TOÁN TỬ SO SÁNH - PHẦN 2

/**
 * ===: so sánh bằng tuyệt đối
 * !==
 */
var a = 1;
var b = '1';
console.log(a === b);
// Khi sử dụng ==, JS chỉ quan tâm value của 2 biến mà thôi
// Khi sử dụng ===, JS sẽ so sánh cả value và data type của cả 2 biến
// Tương tự như ===, !=== cũng có cơ chế hoạt động so sánh tuyệt đối

