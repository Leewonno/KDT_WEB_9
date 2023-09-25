import { useState } from "react";

export default function CounterFunc(){
    const [number, setNumber] = useState(0) //useState 안에 숫자 0은 초기화값
    // console.log(value)

    const handleIncrement = ()=>{
        setNumber(number+1);
    }

    const handleDecrement = ()=>{
        setNumber(number-1);
    }

    return <>
        <h1>{number}</h1>
        <button onClick={handleIncrement}>증가</button>
        <button onClick={handleDecrement}>감소</button>
    </>
}