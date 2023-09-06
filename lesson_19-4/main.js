// * innerText, textContent
// ? innerText: là thuộc tính của element node
// ? textContent: 


var headingElement = document.querySelector('.heading');
// Lấy nội dung text của thẻ
console.log(headingElement.innerText) //chỉ lấy nội dung của text node
console.log(headingElement.textContent) //ghi nhận và lấy ra cả các khoảng cách (lấy nguyên bản hết có thể của text node (bỏ qua CSS áp dụng vào nội dung))

headingElement.innerText = `
New heading`


// getter: lấy ra
headingElement.innerText = `
<i>New</i>` //luoon tạo ra text, ko thể thêm element

// setter: đặt lại

