// 함수

function print(a:number, b:number, c?:number):number{
    if(c == null){
        return a + b;
    }
    else{
        return a + b + c;
    }    
}

console.log(print(1, 2));
console.log(print(1, 2, 3));

const print2 = (a:number, b:number): number => {
    return a + b;
}

// 위 함수 축약형
// return 생략
const print3 = (a:number, b:number) => a*b;

// return이 없는 함수
function print4(a: string, b:string){
    console.log(a, b)
}

// /* ------------------------------------- */
// never
// never : 특정 조건에서만 빠져나갈 수 있고, 어떤 조건에서는 무한루프
// 항상 함수 끝에 도달하지 않는 경우

function goinOn(a:number):never{
    while(true){
        console.log('go');
        // if(a>10) break;
    }
}

goinOn(1);