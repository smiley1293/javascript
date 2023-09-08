// *2. JSON --> OK
// *3. Promise
// *4. Fetch
// *5. DOM Location
// *6. Local storage
// *7. Session storage
// *8. Coding convention
// *9. Best Practises
// *10. Mistakes
// *11. Performances

//? 2.JSON: là 1 định dạng dữ liệu (chuỗi)
// - JavaScript Object Notation
// - JSON: Number, String, Boolean, Null, Array, Object 

// Mã hóa / Giải mã
// Encode / Decode
// Stringigy: từ JavaScript types -> JSON
// Parse: Từ JSON -> JavaScript Types

var a = '["JavaScript","PHP"]'; //chuỗi JSON thể hiện array, luôn sử dụng dấu nháy kép, số thì ko cần dấu nháy kép
var b = '{"name": "Viet", "age":20}'
console.log(JSON.parse(a))
console.log(JSON.parse(b))


console.log(JSON.stringify([
   'J"S',
   'PHP'
]))

//? 3. Promise: 
//    - Sync: chạy theo luồng, tuần tự
//    - Async: như bên dưới, sử dụng callback để giải quyết bất đồng bộ
//    - Nỗi đau

// setTimeout, setInterval, fetch, XMLHttpRequest, file reading
// request animation frame
// sleep: nó ngủ 1 giây và in ra 1, sau đó in ra 2
setTimeout(function(){
   console.log(1)
},1000)

console.log(2)

setTimeout(function() {
   console.log('Dòng này sẽ in ra sau')
}, 0)
// setTimeout là tác vụ bất động bộ (async)

console.log('Dòng này sẽ in ra trước') // Đây là tác vụ đồng bộ (sync)

