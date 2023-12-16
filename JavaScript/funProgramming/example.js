// You will be given an number , have to check it's sqaure is even or not 

// Imprative way of writing it 

// const a = 4;
// let isEven ;

// const aSqure = a*a

// if(aSqure % 2 == 0){
//     isEven = true;
// }else{
//     isEven = false;
// }
// console.log(isEven);

// Declretive way to write it 

let c = (x) => (x*x %2 === 0 ? true : false )
console.log(c(5))