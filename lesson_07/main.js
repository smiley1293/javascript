/**
 * *Các loại function
 * 
 * 1. Decalration function
 * 2. Expression function
 * 3. Arrow function
 */

showMessage();
// ?Declaration function: bắt buộc đặt tên
function showMessage() {
    console.log('Declaration function')
}

// ?Expression function: gán cho 1 biến
var showMessage2 = function () {
    console.log('Expression function')
}
//truyền dưới dạng callback
setTimeout(function autoLogin() {

});

// Hoặc tạo bằng key
var myObject = {
    myFunction: function testName (){

    } 
}
showMessage2();