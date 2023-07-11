// alert("링크방식")

var number = 5; // 변수를 선언한다.
number = 10; //변수 값을 할당한다.

// var는 재선언, 재할당 모두 가능
// let은 재선언 불가능, 재할당가능
// const는 재선언, 재할당 모두 불가능

// var보다는 let을 권장한다.

var name = "이원노";

console.log(`안녕하세요 ${name} 입니다.`)


var names = ["이원노", "이원노2", "이원노3"];

console.log(names.length)

// 배열의 마지막에 추가
names.push("짱아")
console.log("마지막에 추가 : ", names)

// 배열의 가장 마지막 값을 삭제
names.pop()
console.log("마지막 삭제 : ", names)

// 배열의 가장 앞에 값을 추가
names.unshift("첫번째추가")
console.log("맨 앞에 추가 : ", names)

// 배열의 가장 앞을 삭제
names.shift()
console.log("맨 앞 삭제 : ", names)

// 원하는 값을 찾아준다.
// 원하는 값이 있으면 위치한 인덱스 값을 출력, 없으면 -1
console.log(names.indexOf("이원노2"))

// 값이 포함되어있는지 판별하는 기능
// 포함되어있으면 true, 없으면 false
var tf = names.includes("이원노")
console.log(tf);


// Object