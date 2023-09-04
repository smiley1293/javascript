//* forEach, find, filter, some, every, reduce
// var array = new Array(10); //10 phần tử rỗng, nhưng từ 2 phần tử thì nó xem đó là phần tử của mảng
var courses = [
   'JavaScript',
   'Ruby',
   'PHP',
];

// courses.length = 10;

for(var index in courses){
   console.log(index)
}
// vòng for thường sẽ duyệt qua hết theo length, ko quan tâm thuộc tính length là bao nhiêu
// còn for in sẽ duyệt qua phần tử thực

//* forEach
// thằng forEach2 đc thêm vào thằng array nên thằng for in duyệt ko chỉ cả các phần tử hiện hữu, nó duyệt hết
Array.prototype.forEach2 = function(callback){
   for(var index in this){

   }
}


courses.forEach2(function(course, index, array){
   console.log(course, index, array)
})