

var courseApi = 'http://localhost:3000/courses';

function start(){
   getCourses(renderCourses);
   hadleCreateForm()
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

// thêm
function createCourse(data, callback){
   var options = {
      method:"POST",
      headers:{
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
   }
   fetch(courseApi, options)
      .then(function(response){
         response.json();
      })
      .then(callback)
}
// xóa
function handleDeleteCourse(id){
   var options = {
      method:"DELETE",
      headers:{
         'Content-Type': 'application/json'
      },
      // body: JSON.stringify(data)
   }
   fetch(courseApi+ '/' + id, options)
      .then(function(response){
         response.json();
      })
      .then(function(){
         // getCourses(renderCourses)
         var courseItem = document.querySelector(".course-item-"+id);
         if(courseItem){
            courseItem.remove();
         }
      })
}

// sửa
function handleDeleteCourse(id){
   var options = {
      method:"PUT",
      headers:{
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
   }
   fetch(courseApi+ '/' + id, options)
      .then(function(response){
         response.json();
      })
      .then(function(){
         // getCourses(renderCourses)
      
      })
}

function renderCourses(courses){
   var listCoursesBlock = document.querySelector('#list-courses');

   var htmls = courses.map(function(course){
      return `
         <li class = "course-item-${course.id}">
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button onclick="handleDeleteCourse(${course.id})" >Delete</button>
            <button onclick="handleUpdateCourse(${course.id})" >Update</button>
         </li>
      `
   });
   listCoursesBlock.innerHTML = htmls.join('');
}

function hadleCreateForm(){
   var createBtn = document.querySelector('#create')

   createBtn.onclick = function(){
      var name = document.querySelector('input[name = "name"]').value;
      var description = document.querySelector('input[name = "description"]').value;

      var formData = {
         name:name,
         description:description,
      }

      createCourse(formData);
   }
}