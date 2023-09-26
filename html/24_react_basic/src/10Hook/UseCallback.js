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

    const plusCount = ()=>{
        console.log("plusCount", count);
        setCount((prev)=> prev + 1 )
    }

    // useCallback 사용
    // 한번 불러왔으면 그걸로 끝
    const plusCountCallback = useCallback(()=>{
        console.log('plusCountCallback', count);
        setCount((prev)=> prev + 1);
        // setCount(()=> count + 1 )
    }, [])

    const onChange = (e)=>{
        setInputValue(e.target.value);
        plusCount();
    }
    
    return <>
        <input value={inputValue} onChange={(e)=>onChange(e)}></input>
        <ChildComponent onClick={plusCountCallback}></ChildComponent>
        <p>{count}</p>
    </>
}