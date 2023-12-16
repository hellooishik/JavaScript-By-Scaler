const a  = 10

let impure = (x) => (x + a)
console.log("Example of impure Function")
console.log(impure(5))
console.log(impure(10))
console.log(impure(15))

// The vaule of the Function is keep changing due to the require status

// Let's pure it 

let pureFn = (x , a) => ( x + a)
console.log( "pureFn results like this -> " + pureFn(4, 2))
