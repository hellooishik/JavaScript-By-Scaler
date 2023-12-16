// yOU WILL BE GIVEN AN NUMBER AND YOU HAVE TO CALCULATE IT'S SQURE OF THAT NUMBER IS EVEN  OR NOT 

// Impretative way to declear this approach
// Intiazing
// if this appoarach is set to the main frame of the total subsets 
const a = 5;
let isEven ;

if(a * a % 2 == 0){
    isEven = true;
}else{
    isEven = false;
}
console.log(isEven);


// Declerative way to approach this problem
const checkSquare = (x) => (x*x % 2 == 0 ? true : false);
console.log(checkSquare(4));

// Sqaure an isssue
const squre = (x) => (x * x )
console.log(squre(4))

