//* Return trong hàm - Javascript cơ bản

function cong(a, b) {
    return a + b;
}

var result = cong(2,8);
console.log(result)


/**
 * *Một số điều cần biết về function
 * 
 * 1. Khi function đặt trùng tên?
 * 2. Khai báo biến trong hàm? 
 * 3. Định nghĩa hàm trong hàm?
 */


// Khi có hàm cùng tên thì chỉ gọi đến hàm sau cùng


function showMessage() {
    var fullName = 'Trong Viet';
    
    console.log(fullName)
}
// Một biến đc khai báo trong hàm chỉ có phạm vi sử dụng trong hàm
// Và hàm đc tạo trong hàm cũng có chức năng tương tự như biến
showMessage();

function other() {
    function showMessage2() {
        console.log('Message 2');
    }
    showMessage2();
}
other();