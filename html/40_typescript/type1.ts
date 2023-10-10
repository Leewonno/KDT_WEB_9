// 튜플
// 튜플 타입 선언
let drink : [string, number];

// 튜플 초기화
drink = ['콜라', 2000];

// 튜플의 선언과 초기화
let drink2 : [string, number] = ['사이다', 1500];

// js 배열과 동일하게 인덱스 접근 가능, 메서드 사용 가능
console.log(drink);

drink.push('test')
// spread 연산자 사용 가능
console.log(...drink, '콜라3');

// readOnly : 데이터 변경 안되게
let drink3:readonly [string, number] = ['cola', 2000];
// drink3.push('콜라3');



// /* ------------------------------------- */
// 열거형

// enum은 기본적으로 0부터 1씩 증가하는 값을 갖는다.
// admin이 100이라면, user, guest는 101, 102
// 만약 admin 100, user가 200이라면 guest는 201
enum Auth {
    admin = 100,
    user,
    guest,
}

console.log(Auth.user);

// enum은 문자열을 지정해 줄 수 있다.
// 문자열로 했으면 전부 문자열로 맞춰줘야 한다. ?? 초기값을 넣으면 초기값을 넣어줘여한다.
enum Delivery{
    pending = 'pending',
    delivery = 'delivery',
    finish = 0,
    finish2,
}

console.log(Delivery.finish);
console.log(Delivery.pending);
console.log(Delivery.finish2);


// /* ------------------------------------- */
// any 타입

let array: any = ['a', 'b', 1, 2];
console.log(array);