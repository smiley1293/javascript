// JSON Server: API Server / Mock API
// CRUD
//    - Create: tạo mới -> POST
//    - Read: lấy dữ liệu -> GET
//    - Update: chỉnh sửa -> PUT/PATCH
//    - Delete: xóa -> DELETE


var courseApi = "http://localhost:3000/courses";

fetch(courseApi)
   .then(function(response){
      return response.json();
   })
   .then(function(courses){
      console.log(courses)
   })



// Function
