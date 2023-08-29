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

function showMessage() {
    console.log('Message 1');
}

function showMessage(){
    console.log('Message 2');
}
// Khi có hàm cùng tên thì chỉ gọi đến hàm sau cùng
showMessage();