// * Optinal Chaining(?.): sử dụng optional chaining khi nghi ngờ key đó tồn tại hay không

const obj = {
   name:'Alice',
   cat:{
      name:'Lily',
      cat2:{
         name:'Lily',
         cat3:{
            name:'Lailai'
         }
      }
   }
}

obj['cat']?.['cat2']

if(obj?.cat?.cat2?.cat3){
   console.log(obj.cat.cat2.cat3.name)
}

const obj2 = {
   getName(values){
      console.log(values)
   }
}
obj2.getName(123)

