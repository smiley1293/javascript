// 2. Attribute
// 3. Text

var boxNode = document.querySelector('.box-1');

// Công việc 1: Sử dụng tới `boxNode`

// Công việc 2: Sử dụng đến cá li elements là con của box-1

console.log(boxNode.querySelectorAll('li'))
console.log(boxNode.getElementsByTagName('p'))


// 1. getElementById(trả về trực tiếp element)
// 2. getElementByClassName
// 3. getElementByTagName
// 4. querySelector(trả về trực tiếp element)
// 5. querySelectorAll(trả về 1 NodeList)

// 6. HTML collection

// 7. document.write

var headings = document.querySelectorAll('.heading');

for(var i =0;i < headings.length;i++){
   console.log(headings[i])
}

console.log(document.forms) //trả về tất cả các thẻ form