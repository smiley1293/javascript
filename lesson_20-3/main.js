var accounts = [
   {
      id:1,
      name:'Việt'
   },
   {
      id:2,
      name:'Admin'
   },
   {
      id:3,
      name:'Hùng'
   },
   {
      id:6,
      name:'Tụt đáng yêu'
   }
]

var comments = [
   {
      id:1,
      user_id:1,
      content:'Anh ơi khi nào ra hết series vậy ạ'
   },
   {
      id:2,
      user_id:2,
      content:'Tháng sau là đầy đủ nha em'
   },
   {
      id:3,
      user_id:3,
      content:'Hóng hóng anh em ey'
   },
   {
      id:2,
      user_id:2,
      content: 'Cảm ơn em đã ủng hộ'
   },
   {
      id:4,
      user_id:6,
      content:'Iuu Việt quạ'
   }
]

function getCommetns(){
   return new Promise(function(resolve){
      setTimeout(function(){
         resolve(comments);
      }, 1000)
   })
}


function getUsersByIds(userIds){
   return new Promise(function(resolve){
      var result = accounts.filter(function(user){
         return userIds.includes(user.id)
      });
      setTimeout(function(){
         resolve(result)
      },1000)
   })
}

getCommetns()
   .then(function(comments){
      var userAccount = comments.map(function(comment){
         return comment.user_id;
      })
      return getUsersByIds(userAccount)
         .then(function(accounts){
            return {
               accounts: accounts,
               comments:comments
            }
         })
   })
   .then(function(data){
      var commentSite = document.getElementById('comment-site');
      var html = '';
      data.comments.forEach(function(comment){
         var user = data.accounts.find(function(user){
            return user.id == comment.user_id;
         });
         html += `<li>${user.name}: ${comment.content}</li>`
      })
      commentSite.innerHTML = html;
   })