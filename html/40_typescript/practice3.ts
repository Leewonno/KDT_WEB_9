function sum1(a:number, b:number){
    console.log(a+b);
}

function sum2(...a : number[]){
    return a.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

sum1(1,15);
console.log(sum2(1, 2, 3, 4, 5));