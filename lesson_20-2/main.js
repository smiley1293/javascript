var users = [
   {
      id:1,
      name: 'Kiên'
   },
   {
      id:2,
      name: 'Trọng Việt'
   },
   {
      id:3,
      name: 'Hưng'
   },
]

var comments = [
   {
      id:1,
      user_id:1,
      content:'Anh Việt chưa ra video'
   },
   {
      id:2,
      user_id: 2,
      content:'Vừa ra xong em ơi'
   },
   {
      id:3,
      user_id:1,
      content:'Dạ oke anh ơi'
   }
]

// 1. Lấy comment
// 2. Từ conmment lấy ra user_id, từ user_id lấy ra user tương ứng

// Fake API

// 1. Array
// 2. Function, callback
// 3. Promise
// 4. DOM

function getComments(){
   return new Promise(function(resolve){
      setTimeout(function(){
         resolve(comments)
      },1000)
   })
}

function getUsersByIds(userIds){
   return new Promise(function(resolve){
      var result = users.filter(function(user){
         return userIds.includes(user.id)
      })
      setTimeout(function(){
         resolve(result)
      },1000)
   })
}

// Callback hell
// Promise hell

getComments()
   .then(function(comments){
      var userIds = comments.map(function(comment){
         return comment.user_id;
      });
      return getUsersByIds(userIds)
         .then(function(users){
            return{
               users: users,
               comments: comments
            };
            
         })
   })
   .then(function(data){
      var commentBlock = document.getElementById('comment-block');
      var html = ''
      data.comments.forEach(function(comment){
         var user = data.users.find(function(user){
            return user.id == comment.user_id;
         });
         html += `<li>${user.name}: ${comment.content}</li>` 
      });
      commentBlock.innerHTML = html;
   })