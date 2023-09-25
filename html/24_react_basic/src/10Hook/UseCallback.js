import { useState, useCallback } from "react";

function ChildComponent({onClick}){
    console.log("Child Component");

    return <>
        <button onClick={onClick}>PLUS</button>
    </>
}

export default function UseCallback(){
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');

    const plusCount = ()=>{setCount(()=> count + 1 )}

    // useCallback 사용
    const plusCountCallback = useCallback(()=>{setCount(()=> count + 1 )}, [])
    
    return <>
        <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)}></input>
        <ChildComponent onClick={plusCountCallback}></ChildComponent>
        <p>{count}</p>
    </>
}