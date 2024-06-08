const height = document.querySelector('#height');
const weight = document.querySelector('#weight');

// console.log(height);
// console.log(weight);

// we can't use it becoz it is taking the input as there is any changes so we want it to take the changes after calculate button is click 
// height.addEventListener('input',(i) => {
//     h = i;
//     console.log(i);
// })
// it is use to take input when it is said to read by method value but as soon as we click it refresh so there is no value to take that's why it show nothing
// const inp = height.value;
// console.log(inp);

const form = document.querySelector('form');

form.addEventListener('submit',(e) => {
    e.preventDefault(); // preventing from getting refresh or to default form
    // let h = Number(height.value); // or parseInt(height.value)
     let h = parseInt(height.value);
    let w = Number(weight.value);
    console.log(h);
    console.log(w);
    const result =  document.getElementById('results');
    // h != NaN instead of it isNaN(h) it is used to go when input is not a number
    if(h === '' || h < 0 || isNaN(h) ){ 
        result.innerText = 'Give valid height';   
    }
    else if( w === '' || w < 0 || isNaN(w)){
        result.innerText = 'Give valid weight';
    }
    else{
    let r = w/((h*h)/1000).toFixed(2);
    console.log(r);
    result.innerHTML = `<span>${r}<br>underweight</span>`
    
    if(r < 18.6){
    result.innerHTML = `<span>${r}<br>Under weight</span>`
    }
    else if(r >= 18.6 && r <= 24.9){
    result.innerHTML = `<span>${r}<br>Normal Range</span>`
    }
    else{
    result.innerHTML = `<span>${r}<br>Over weight</span>`
    }
        
        
    }
})



// const form = document.querySelector('form');
// // this usecase will give you empty
// // const height = parseInt(document.querySelector('#height').value)

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const height = parseInt(document.querySelector('#height').value);
//   const weight = parseInt(document.querySelector('#weight').value);
//   const results = document.querySelector('#results');

//   if (height === '' || height < 0 || isNaN(height)) {
//     results.innerHTML = `Please give a valid height ${height}`;
//   } else if (weight === '' || weight < 0 || isNaN(weight)) {
//     results.innerHTML = `Please give a valid weight ${weight}`;
//   } else {
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//     //show the result
//     results.innerHTML = `<span>${bmi}</span>`;
//   }
// });

