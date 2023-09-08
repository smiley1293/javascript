// * DOM Events

// 1. Attribute events:
// 2. Assign event using the element node

var h1Element = document.querySelectorAll('h1');

for(var i =0;i <h1Element.length;i++){
   h1Element[i].onclick = function(e){
      console.log(e.target)
   }
}

h1Element.onclick = function(e){ //là mouse event
   console.log(e.target) //lấy lại chính nó
}

// *1. Input / select
// *2. Key up / down
document.onkeydown = function(e){
   switch(e.which){
      case 27:
         console.log('EXIT');
         break;
      case 13:
         console.log('SEND CHAT');
         break;
   }
}


var inputValue;
var inputElement = 
   document.querySelector('input[type="text"]')

   inputElement.onkeyup = function(e){
      console.log(e) ; //có thể lấy thằng keyboardEvent

      switch(e.which){
         case 27:
            console.log('Exit');
            break;
      }
   }

var checkboxElement = 
   document.querySelector('input[type="checkbox"]')

   checkboxElement.onchange = function(e){
      console.log(e.target.checked)
   }

var selectElement = 
   document.querySelector('select');

selectElement.onchange = function(e){
   console.log(e.target.value)
}


