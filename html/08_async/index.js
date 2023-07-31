// setTimeout(code, delay): delay동안 기다리다가 코드를 실행한다.

// console.log(1);
// setTimeout( () =>{
//     console.log(2);
// }, 2000);
// console.log(3);


// 마트 예제로 비동기 확인하기
function goMart(){
    console.log("마트에 가서 어떤 음료를 살지 고민한다.")
}

function pickDrink(callback){
    setTimeout( () => {
        console.log("고민 끝");
        product = "콜라";
        price = 2000;
        callback(product, price);
    }, 3000);
}

// function pay(pro, pri){
//     console.log(`상품명 : ${pro}, 가격 : ${pri}`);
// }

let product;
let price;
goMart();
pickDrink((pro, pri)=>{
    console.log(`상품명 : ${pro}, 가격 : ${pri}`);
});
//pay(product, price);


// // 콜백함수 : 함수 타입 파라미터 맨 마지막에 하나 더 선언
// function mainFunc(param1, param2, callback){
//     console.log(param1, param2)
//     callback();
// }

// function callbackFunc(param){
//     console.log("콜백함수 입니다.");
// }

// mainFunc(1, 2, callbackFunc)
// // 콜백함수는 보통 익명함수로 많이 입력한다.