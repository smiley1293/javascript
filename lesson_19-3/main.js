
//* DOM attribute
var headingElement = document.querySelector('a');

headingElement.title = 'Heading';
headingElement.id = 'Heading';
headingElement.className = 'Heading';
headingElement.href = 'Heading';
// chúng ta đang dùng setter
// nhưng phải là element hợp lệ của thẻ

headingElement.setAttribute('class','hello')
// 2 đối số: tên của attribute muốn set và giá trị

// lấy ra 1 value của attribute
headingElement.getAttribute('class');
console.log(headingElement.getAttribute('class'))