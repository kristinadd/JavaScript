// function power(base, exponent=2) {
//   // local variable 
//   let result = 1;
//   for (let i=0; i<exponent; i++) {
//     result *= base;

//     return result;
//   }
// }

// console.log(power(2, 3));

// arrow function 

apower = (base, exponent=2) => {
  let result = 1;
  for (let i=0; i<exponent; i++)
    result *= base;
  return result;
}

console.log(apower(2, 10));

// recursive function
function rpower(base, exponent=2) {
  // base case
  if (exponent == 0) 
    return 1;


  return base * rpower(base, exponent-1);
}

console.log(rpower(2, 10));


// node functions.js
