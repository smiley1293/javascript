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
console.log(author.getClassName());
console.log(user);

//* Đối tượng Date

var date = new Date();

console.log(date)
var currentDay = date.toISOString().split('T')[0]
console.log(currentDay)

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate()

console.log(year)
console.log(month)
console.log(day)

// Key word: Javascript date object mozilla


/**
 * *Math object
 * 
 * - Math.PI
 * - Math.round()
 * - Math.abs()
 * - Math.ceil()
 * - Math.floor()
 * - Math.random()
 * - Math.min()
 * - Math.max()
 */

console.log(Math.PI)
console.log(Math.round(1.2)) // 1 : làm tròn theo quy luật
console.log(Math.abs(-4)) //lấy giá trị tuyệt đối
console.log(Math.ceil(9.00001)) // 10 | hàm ceil luôn làm tròn lên, chỉ cần có thập phân là đơm
console.log(Math.floor(9.6)) // thằng này luôn làm tròn xuống dưới
console.log(Math.random())// ứng đụng để tạo ra 1 số ngẫu nhiên
console.log(Math.floor(Math.random()*10))
var random = Math.floor(Math.random()*100);
// chơi theo tỉ lệ
if(random < 5){ //tỉ lệ thành công là 5%
   console.log('Cường hóa thành công')
}else{
   console.log('Bạn đen lắm')
}
var bonus = [
   '10 coin',
   '20 coin',
   '30 coin',
   '40 coin',
   '50 coin',
]
console.log(bonus[random])

console.log(Math.min(1,2,3,4,5,))
// Max thì ngược lại
function getRandomItem(array){
   var random = Math.floor(Math.random()*array.length)
   return array[random]
}
var sale = [
   '10%',
   '20%',
   '30%',
   '40%',
   '50%',
]
console.log(getRandomItem(sale));
