// *Destructuring, rest
function logger({ name, price, ...rest }) {
   console.log(name);
   console.log(price);
   console.log(rest);
}

logger({
   name: 'JavaScript',
   price: 3000,
   description: 'COntent'
});

function arrays([a, b, ...rest]) {
   console.log(a)
   console.log(b)
   console.log(rest)
}

arrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// * Spread: rải

var array = ['JavaScript', 'Ruby', 'PHP'];

var array2 = ['ReactJS', 'Dart']; //bỏ ngoặc và lấy các phần tử bên trong

var array3 = [...array, ...array2];
console.log(array3)

var object1 = {
   name: 'JavaScript',
}

var object2 = {
   price: 1000,
}

var object3 = {
   ...object1,
   ...object2,
}
console.log(object3)

var defaultConfig = {
   api:'https://www.google.com',
   apiVersion: 'v1.0',
   other:'google'
}

var exercialConfig = {
   ...defaultConfig,
   api:'https://www.google.com/baiftap', //nếu key trùng name thì nó lụm thằng đc định nghĩa sau 
}

console.log(exercialConfig)


var mang = ['default','mangle','default']

function generate(a,b,c){
   console.log(a,b,c);
}

generate(...mang)

function generate2(...rest){
   for(var i=0;i<rest.length;i++){
      console.log(rest[i]);
   }
}
generate2(...mang)//rải nó ra trong array của 1 object khác thì nó là spread 
