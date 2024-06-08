const user = document.querySelector('#userName');


document.querySelector('#subt').addEventListener('click',function (e) {
    e.preventDefault();
    // let Username = null;
    let Username = user.value;
    namePrint(Username);
})

function namePrint(str){
 let nameUser = str;

 document.querySelector('#start').addEventListener('click',()=>{
   const interval = setInterval(function (){
     console.log(nameUser,Date.now());
   },2000);
  
   document.querySelector('#stop').addEventListener('click',() => {
       clearInterval(interval);
       console.log('stoppped');
      //  nameUser = null;
       
   })
 },false)
}


