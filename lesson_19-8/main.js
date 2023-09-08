//* ClassList Property

// add: thêm class vào trong element
// contains: kiểm tra xem có chứa class hay ko
// remove: xóa bỏ 1 class khỏi element
// toggle: nếu đang có class ở element, thì gọi toggle nó xóa, ko có thì nó sẽ thêm

var boxElement = document.querySelector('.box')

console.log(boxElement.classList.add('red'))
console.log(boxElement.classList.contains('red'))
console.log(boxElement.classList.remove('red'))
// console.log(boxElement.classList.toggle('red'))
// console.log(boxElement.classList.toggle('red'))

setInterval(()=>{
   boxElement.classList.toggle('red')
},1000)

