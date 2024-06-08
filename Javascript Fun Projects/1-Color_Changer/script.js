// select button
const buttons = document.querySelectorAll('.button')
console.log(buttons);
const body = document.querySelector('body');
console.log(body);

// it is function with return type as void by default we can't change it 
addEventListener('click',function (e) {
    // console.log(e);
    // console.log(e.target);
    /*
    switch (e.target.id) {
        case 'grey':
            body.style.backgroundColor = 'grey';
            break;
        case 'white':
            body.style.backgroundColor = 'white';
            body.style.color = 'black'
            break;
        case 'blue':
            body.style.backgroundColor = 'blue';
            break;
        case 'yellow':
            body.style.backgroundColor = 'yellow';
            break;
    
        default:
            body.style.backgroundColor = 'black';
            body.style.color = 'white';
            break;
    }
    */

    //  console.log(e.target.id);
     body.style.backgroundColor = e.target.id;

//  


})

// console.log(ev)

// console.log("hitesh")
// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function (button) {
//   console.log(button);
//   button.addEventListener('click', function (e) {
//     console.log(e);
//     console.log(e.target);
//     if (e.target.id === 'grey') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'white') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'blue') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'yellow') {
//       body.style.backgroundColor = e.target.id;
//     }
    
//   });
// });