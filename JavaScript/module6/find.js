// Find returns the first element of that arrays if the condition i sactified 

const transsations = [1500, 2600, -450, 7000, -2655, -4220 , 4586]

let firstWithdrawl = transsations.find((x)=>{
    return x<0
})

console.log(firstWithdrawl);
let firstWithdrawlIndex = transsations.findIndex((x)=>{
    return x<0
})

console.log(firstWithdrawlIndex);

// someAndEveryMethod

let tryWithSome = transsations.some((x)=>{
    return x>0
})

console.log(tryWithSome);
