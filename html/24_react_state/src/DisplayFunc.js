import {useState} from 'react';

export default function DisplayFunc(){
    const [content, setContent] = useState("안녕하세요");
    const [btn, setBtn] = useState("사라져라");
    const [dis, setDis] = useState("block");
    const [btnState, setBtnState] = useState("block");
    const [btnState2, setBtnState2] = useState("none");

    const handleDisplayNone = ()=>{
        setDis("none");
        setBtn("보여라");
        setBtnState("none");
        setBtnState2("block");
    }

    const handleDisplay = ()=>{
        setDis("block");
        setBtn("사라져라");
        setBtnState("block");
        setBtnState2("none");
    }


    return <div>
        <div>
            <h1 style={{display:dis}}>{content}</h1>
        </div>
        <button style={{display:btnState}} onClick={handleDisplayNone}>{btn}</button>
        <button style={{display:btnState2}} onClick={handleDisplay}>{btn}</button>
    </div>
}