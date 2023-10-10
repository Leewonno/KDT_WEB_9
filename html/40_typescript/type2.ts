interface Student {
    name:string;
    grade:number;
    isPassed?:boolean;
}
// 필수가 아니라 선택하게 하려면 ? 를 넣으면 된다.

let student1:Student = {
    name:"이원노",
    grade:4,
    isPassed:true,
}

console.log(student1);


// /* ------------------------------------- */
// type
type gender = 'Female' | 'male';
let g1 : gender = 'Female';
// let g2 : gender = 'female';
console.log(g1);

