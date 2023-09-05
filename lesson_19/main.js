// * HTML DOM (Document Object Model)
// Có 3 thành phần

/**
 * - Element
 * - Attribute
 * - Text
 */
// -------------------

// JavaScript: Browser | Server (NodeJS)
// Javascript ko có DOM, nhưng do web api nên khi chạy trên web nó sẽ nhìn thấy
// (Application Programming interface: một ứng dụng mở ra con đường cho ứng dụng khác nhìn thấy)
// Browser: HTML -> DOM -> DOM API -> WEB API

document.write('Hello')

//* 1. Element: ID, class, tag, CSS selector, HTML colelction
var headingNode = document.getElementById('heading')
console.log(headingNode)

var headingNodes = document.getElementsByClassName('heading')
console.log(headingNodes)
document.getElementsByTagName('h1')
// dùng cho CSS selector
document.querySelector('.cha-heading .heading:first-child')
document.querySelector('.cha-heading .heading:nth-child(2)')
var nodes = document.querySelectorAll('.cha-heading .heading:nth-child(2)')
nodes[1] //lấy ra thằng đầu tiên 

// dùng cho HTML collection

document.forms[1] //lấy ra form(form thứ mấy)
//trả về tất cả thẻ a có attribute là name
console.log(document.anchors)
// Trả về tất cả thẻ hình ảnh
document.images;
//* 2. Attribute:
//* 3. Text