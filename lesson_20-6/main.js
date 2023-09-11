

var courseApi = 'http://localhost:3000/courses';

function start(){
   getCourses(renderCourses)
}
start();


// Function 
function getCourses(callback){
   fetch(courseApi)
      .then(function(response){
         return response.json()
      })
      .then(callback)
}

function renderCourses(courses){
   var listCoursesBlock = document.querySelector('#list-courses');

   var htmls = courses.map(function(course){
      return `
         <li>
            <h4>${course.name}</h4>
            <p>${course.description}</p>
         </li>
      `
   });
   listCoursesBlock.innerHTML = htmls.join('');
}

function hadleCreateForm(){
   var createBtn = document.querySelector('#create')

   createBtn.onclick = function(){
      var name = document.querySelector('input[name = "name"]');
      var description = document.querySelector('input[name = "descripttion"]');
   }
}