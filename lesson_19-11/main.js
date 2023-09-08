// *1. Event listener
// *2. JSON
// *3. Fetch
// *4. DOM Location
// *5. Local storage
// *6. Session storage
// *7. Coding convention
// *8. Best Practises
// *9. Mistakes
// *10. Performances

// 1. Xử lý nhiều việc khi 1 event xảy ra
// 2. Lắng nghe / Hủy bỏ lắng nghe


var btn = document.getElementById('btn');

// btn.onclick = function(){
//    // Việc 1:
//    console.log('Việc 1');

//    // Việc 2:
//    console.log('Việc 2');

//    // Việc 3:
//    alert('Việc 3');
// }

// setTimeout(function(){
//    btn.onclick = function(){

//    }
// },3000) //hủy bỏ lắng nghe sau 3 giây

function viec1(){
   console.log(Math.random())
}
btn.addEventListener('click',viec1);

setTimeout(function(){
   btn.removeEventListener('click', viec1)
},3000)