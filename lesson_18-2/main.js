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
// thằng forEach2 đc thêm vào thằng array nên thằng for in duyệt ko chỉ cả các phần tử hiện hữu, nó duyệt hết cả trong _proto_ của 1 object
Array.prototype.forEach2 = function(callback){
   for(var index in this){
      if(this.hasOwnProperty(index)){
         callback(this[index], index, this)
      }
       // kiểm tra xem có nằm trong phương thức gần nhất hay ko
   }
}


courses.forEach2(function(course, index, array){
   console.log(course, index, array)
})

// *My filter()
Array.prototype.filter2 = function(callback){
   var output = [];
   for(var index2 in this){
      if(this.hasOwnProperty(index2)){
         var result = callback(this[index2],index2, this)
         if(result){
            output.push(this[index2])
         }
      }
   }
   return output;
}

var courses2 = [
   {
      name:'JavaScript',
      coin:680
   },
   {
      name:'PHP',
      coin:860
   },
   {
      name:'Ruby',
      coin:980
   }
]
// 2 dạng tham chiếu và thamn trị: values type và values reference 
var filterCourses = courses2.filter2(function(course, index, array){
   return course.coin > 500
})
console.log(filterCourses)


//* My some(): kiểm tra tối thiểu 1 phần tử có thỏa mãn trong mảng hay ko, ko lặp qua phần tử trống
Array.prototype.some2 = function(callback){
   for(var index in this){
      if(this.hasOwnProperty(index)){
         if(callback(this[index],index,this)){
            return true;
         }
      }
      
   }return false;
}


var courses3 = [
   {
      name: 'JavaScript',
      coin: 680,
      isFinish: false,
   },
   {
      name: 'JavaScript',
      coin: 8600,
      isFinish: false,
   },
   {
      name: 'JavaScript',
      coin: 980,
      isFinish: false,
   },
]

var result = courses3.some2(function(course, index, array){
   return course.coin < 980;
});

console.log(result)

// * My every()
Array.prototype.every2 = function(callback){
   var output = true;
   for(var index in this){
      if(this.hasOwnProperty(index)){
         var result = callback(this[index],index,this)
         if(!result){
            output = false;
            break;
         }
      }
   }
   return result
}


var result2 = courses3.every2(function(course, index, array){
   return course.coin > 200;
})
console.log(result2)