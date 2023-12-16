// // Given an array of integer , return the sqaure of all the index

// // Given approah 
// let arr = [ 1, 2, 4, 5, 10]
// let newArr = []

// for(let i = 0; i<arr.length; i++){
//     newArr.push(arr[i] * arr[i])
// }
// console.log(newArr);
// // the higere level function is been walking towards the main set of the total [pagaism]

// // the functional apporach 

// const list = [1, 2, 4, 6, 10]

// // map taking all the contains that list have and squaring the single input into the array which is created by the map function

// const newRule = list.map(function(n){
//     return n*n
// })
// console.log(newRule);

// const trans = {
//     one : 4200,
//     two : 2500,
//     three : 4500,
//     four : 8000

//     deduction:{
//         set : 4800,
//         twoset : 500
//     },
// };


// ForEach Function defination overview

const transsations = [1500, 2600, -450, 7000, -2655, -4220 , 4586]
const intodollar = 80 

// let doTheSum = transsations.map((amout)=>{
//         return (amout/intodollar).toFixed(0)
// })

// console.log(doTheSum);

let doTheSumAgain = transsations.forEach((amout) =>{
    console.log(`the amount in dollar is ${(amout/intodollar).toFixed(2)}`)
})

console.log(doTheSumAgain);