//* Object trong javascript

var emailKey = 'email'


var myInfo = {
   name:'Trong Viet',
   age:20,
   address: 'Thủ đức',
   [emailKey]: 'viet@gmail.com',
   getName: function (){
      return this.name //myInfo.name
   }
}

// thêm key và value vào trong 1 object sau khi đc khởi tạo
// myInfo.email = '' cách 1
// myInfo['my-email'] = 'viet12092003@gmail.com' cách 2
console.log(myInfo)
console.log(myInfo.address)
// Lấy 1 key ko có sẽ trả vê undefined

var myKey = 'name';

console.log(myInfo[myKey]) //truyền trong ngoặc vuông dưới dạng biến

// Xóa key&value trong object
delete myInfo.age;
// Function --> Phương thức / method
// Others --> Thuộc tính /Properties

console.log(myInfo.getName())


//*Object constructor:

function User(firstName, lastName, avatar) {
   this.firstName = firstName;
   this.lastName = lastName;
   this.avatar = avatar;

   this.getName = function (){
      return `${this.firstName} ${this.lastName}`
   }
}
// Sau này đối tượng đc khởi tạo từ bản thiết kế này, thì sẽ có firstName bằng với tham số firstName đc truyền vào khi khởi tạo đối tượng

var author = new User('Mai', 'Việt', 'avatar');
var user = new User('Vũ', 'Nguyễn', 'Avatar');

author.title = 'Chia sẻ kiến thức';
user.comment = 'Hay vãi'

console.log(author.getName())
console.log(user.getName())

/**
 * *Obeject prototype - Basic
 * 
 * 1. Prototype là gì?
 * 2. Sử dụng khi nào?
 */

// Prototype giúp thêm đc 1 thuộc tính ở bên ngoài hàm tạo
// Thêm vào các đôi tượng đc tạo ra
// 
User.prototype.className = 'F8';
User.prototype.getClassName = function (){
   return this.className;
}
console.log(author.getClassName())
console.log(user)