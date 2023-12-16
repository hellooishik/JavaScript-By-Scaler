// Let's see by an example 

const firstName = function (firstName , cb){
    console.log(firstName)
    cb("Dutta")
}

firstName("Oishik" , printlastname)

function printlastname(lastName){
    console.log(lastName);
}

// Find the even number from it 

const findEven = (x) => (x % 2 == 0)

let printResult = function(evenfm , num){
    const isEven = evenfm(num)
    console.log(`The number ${num} is an even number :  ${isEven}`)
}

printResult(findEven , 16)