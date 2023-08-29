/**
 * Comment trong JS
 * 
 * 1. Mục đích sử dụng
 * - Ghi chú
 * - Vô hiệu hóa code
 * 
 * 2. Loại comments
 * - Comment 1 dòng
 * - Comment nhiều dòng
 * 
 * 3. Sử dụng phím tắt
 */

// Vùng khai báo biến
var fullName = 'Mai Trong Viet';
var age = 26; //khai báo tuổi

// alert(fullName);
// alert(age);

/**
 * Giới thiệu một số hàm built in
 *      1. Alert
 *      2. Console
 *      3. Confirm
 *      4. Prompt   
 *      5. Set timeout
 *      6. Set interval
 */

var fullName = 'Mai Trong Viet';
console.log(fullName) 
// confirm('Xác nhận bạn đủ tuổi');
// *Hàm prompt cho phép nhập input
// prompt('Xác nhận bạn đủ tuổi');
// *setTimeout đc truyền vào 1 function
// setTimeout(function() {
//     alert('Hế lô mấy ní')
// }, 2000)

// *setInterval: truyền vào như setTimeout nhưng cứ chạy sau mỗi khoảng thời gian mình set
// setInterval(function() {
//     console.log('Đây là interval')
// }, 3000)

/**
 ** Giới thiệu về toán tử
    1. Toán tử số học - Arithmetic
    2. Toán tử gán - Assignment
    3. Toán tử so sánh - Comparison
    4. Toán tử Logic - Logical
 */

    // var fullName = "Mai Trong Viet" //toán tử gán
    // var a = 1;
    // var b = 2;

    // if (a == b){
    //     console.log('A lớn hơn B')
    // }else{
    //     console.log('A bé hơn B nha')
    // }

    /**
     * *Toán tử số học
     * +        --> Cộng
     * -        --> Trừ
     * *        --> Nhân
     * **       --> Lũy thừa
     * /        --> Chia
     * %        --> Chia lấy số dư
     * ++       --> Tăng 1 giá trị số
     * --       --> Giảm 1 giá trị số
     */

    // var a = 8;
    // var b = 2;

    // var c =  a%b;
    // console.log(c)

    // ?Toán tử ++ --
    // Prefix & Postfix

    var a = 6;

// Việc 1: +1 cho a, a = a+1 ==> a =7
// Việc 2: trả về a sau khi đc cộng 1, --a thì ngược lại
    // var output = ++a;

    // console.log(output) //7

    // Việc 1: 'a copy', 'a copy' = 6
    // Việc 2: + 1 của a, a = a + 1 => a = 7
    // Việc 3: Trả về 'a copy'
    // var output = a++;

    // console.log(output);
    // ?muốn nhìn đc giá trị thật của a
    // console.log(a)

    var number = 6;

    // var output = number++ + --number;
    // 6 + 6 = 12
    var output = ++number *2 - number--*2;
    // 7 * 2 - 
    console.log(output)



