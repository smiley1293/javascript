// inner HTML, outerHTML

var boxElement = document.querySelector('.box');

boxElement.innerHTML = '<h1 >Heading nè</h1>'

console.log(document.querySelector('h1').innerText)

// outerHTML: ghi đè thằng hiện tại luôn
boxElement.outerHTML = '<div>Đè nè</div>'
// sau khi outer thì nó mất thằng box element, nhưng nó vẫn còn đc lưu trong bộ nhớ

// *For practise
var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
   var result = courses.map(function (course, index) {
      return '<li>'+course+'</li>'
   }).join('');
   var ulElement = document.querySelector('ul');
   ulElement.innerHTML = result;
}
render(courses)


// render(courses)