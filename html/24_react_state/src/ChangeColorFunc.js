import {useState} from "react";

export default function ChangeColorFunc(){
    const [color, setColor] = useState("black");
    const [content, setContent] = useState("검정색 글씨");

    const handleRed = ()=>{
        setColor("red");
        setContent("빨간색 글씨");
    }

    const handleBlue = ()=>{
        setColor("blue");
        setContent("파란색 글씨");
    }

    return(
        <>
            <h1 style={{color:color}}>{content}</h1>
            <button onClick={handleRed}>빨강</button>
            <button onClick={handleBlue}>파랑</button>
        </>
    )
}