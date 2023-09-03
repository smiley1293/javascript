var courses = [
   {
      id: 1,
      name: 'JavaScript',
      coin:250
   },
   {
      id: 2,
      name: 'HTML + CSS',
      coin:250
   },
   {
      id: 3,
      name: 'Ruby',
      coin:0
   },
   {
      id: 4,
      name: 'PHP',
      coin:400
   },
   {
      id: 5,
      name: 'ReactJS',
      coin: 500
   },
]

// var numbers = [100,200,220,200,480]

// var totalCoin = numbers.reduce(function(total, number){
//    return total + number;
// }) //ko cho initial number thì nó sẽ return về kiểu dữ liệu ban đầu
// console.log(totalCoin)





// var totalCoin = courses.reduce(function(total, course){
//    return total + course.coin;
// },0) //initial value là giá trị ko bắt buộc: nếu ko có thì nó sẽ lấy giá trị của element đầu tiên làm giá trị khởi tạo => nó lấy luon 2 phần tử đầu: 1 cái gán cho thằng lưu trữ, 1 cái gán cho thằng currentValue 
// console.log(totalCoin);


// *Flat - "Làm phẳng" mảng từ Depth Array = mảng sâu
var depthArray = [1,2, [3, 4], 5, 6, [7,8,9]];

var flatArray = depthArray.reduce(function(flatOutput, depthItem){
   return flatOutput.concat(depthItem)
},[])
console.log(flatArray)
// *Lấy ra các khóa học đưa vào 1 mảng mới
var topics = [
   {
      topic:"Front-end",
      courses: [
         {
            id:1,
            title:"HTML, CSS"
         },
         {
            id:2,
            title: "Javascript"
         }
      ]
   },
   {
      topic:"Back-end",
      courses: [
         {
            id:1,
            title:"PHP"
         },
         {
            id:2,
            title: "NodeJS"
         }
      ]
   },
]

var newCourses = topics.reduce(function(courses, topic){
   return courses.concat(topic.courses)
},[])
console.log(newCourses)


var htmls = newCourses.map(function(course){
   return `
         <div>
            <h2>
               ${course.title}
            </h2>
            <p>
               ${course.id}
            </p>
         </div>
   `
})
console.log(htmls.join(''))
