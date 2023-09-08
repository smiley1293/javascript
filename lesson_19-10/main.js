// DOM EVENTS

// *1, PreventDefault: chặn default trình duyệt
// *2. stopPropagation: ngăn chặn sự kiện nổi bọt

// 1. preventDefault:
var aElement = document.links;
for (var i = 0; i < aElement.length; i++) {
   aElement[i].onclick = function (e) {
      if (!e.target.href.startsWith("https://f8.edu.vn")) {
         e.preventDefault();
      }
   }
}
var ulElement = document.querySelector('ul')
ulElement.onmousedown = function (e) {
   e.preventDefault();
}

ulElement.onclick = function (e) {
   console.log(e.target);
}

// stopPropagaton
document.querySelector('div').onclick =
   function (e) {
      console.log('DIV nè')
   };

document.querySelector('button').onclick =
   function (e) {
      console.log('Click me')
      e.stopPropagation()
   };