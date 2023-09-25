import {useEffect, useRef, useState} from "react";


// 사용자가 웹사이트에서 회원가입 시 실수로 버튼을 두번 클릭하는 것을 방지

export default function RefSampleFunc2(){
    const lastTime = useRef(null);

    const handleSubmit = ()=>{
        const now = Date.now();

        if(lastTime.current && now - lastTime.current < 1000){
            console.log("클릭시간이 같습니다.");
            return false;
        }

        lastTime.current = now;
        console.log("제출")
    }
    
    return <>
        <button onClick={handleSubmit}>회원가입</button>
    </>
}

// // 로컬변수 / 랜더링되어도 값을 그대로 유지
// export default function RefPractice2(){

//     const [time, setTime] = useState(0);
//     const idRef = useRef(0);

//     // useRef로 생성된 객체는 .current 프로퍼티를 가지고 있어 이를 통해 변수에 접근가능
//     // useRef로 생성된 변수는 컴포넌트가 리랜더링되어도 그 값을 유지
//     // useRef의 값이 변경되어도 컴포넌트는 리랜더링되지 않음

//     const plusIdRef = ()=>{
//         setTime(0);
//         idRef.current += 1;
//         console.log(idRef.current);
//     }

//     useEffect(()=>{
//         const interval = setInterval(()=>{
//             setTime((prev)=> prev + 1);

//         }, 1000);

//         // setInterval에 설정된 반복을 취소
//         return () => clearInterval(interval);
//     })

//     return <>
//         <h1>Ref Sample</h1>
//         <h2>{time}</h2>
//         <h2>{idRef.current}</h2>
//         <button onClick={plusIdRef}>PLUS</button>
//     </>
// }