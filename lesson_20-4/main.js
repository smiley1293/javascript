// *Fetch: gọi lên API lấy ra nội dung lưu trữ ở backend, FE nhận và render nó ra

// API (URL) -> Application Programing Interface

// Cổng giao tiếp giữa các phần mềm

// Backend -> API(URL) -> Fetch -> JSON/XML
// -> JSON.parse -> JavaScript types
// -> Render ra giao diện với HTML

var postApi = 
   'https://jsonplaceholder.typicode.com/posts'

fetch(postApi)
   .then(function(response){
      return response.json();
      // JSON.parse -> JavaScript
   })
   .then(function(posts){
      var htmls = posts.map(function(post){
         return `<li>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
         </li>`
      })

      var html = htmls.join('');
      document.getElementById('content-block').innerHTML = html
   })
   .catch(function(err){
      console.log('Có lỗi')
   })