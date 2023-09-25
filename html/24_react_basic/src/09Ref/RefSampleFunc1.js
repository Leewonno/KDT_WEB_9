import {useRef} from "react";

export default function RefSampleFunc1(){
    // Ref 객체 만들기
    const myInput = useRef();

    const handleFocus = ()=>{
        myInput.current.focus();
    }

    return <>
        <p>(함수형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>
        <input ref={myInput}></input>
        <button onClick={handleFocus}>버튼</button>
    </>
}