import { useState, useEffect } from "react";

function Mycomponent(props){
    const {number} = props;
    const [text, setText] = useState("");

    useEffect(()=>{
        console.log("항상 실행됩니다.");
    });

    // 데이터 받아오면 된다
    useEffect(()=>{
        console.log("컴포넌트가 생성될 때 실행됩니다.")

        return ()=>{
            console.log("제거될 때 실행됩니다.");
        }
    }, [])

    useEffect(()=>{
        console.log("state가 변경될 때 실행됩니다.")
    }, [text])

    return<>
        <div>Mycomponent Func {number}</div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}></input>
    </>
}

export default function LifeCycleFunc(){
    const [number, setNumber] = useState(0);
    const [visible, setVisible] = useState(true);

    const changeNumberState = ()=>{
        setNumber(number + 1);
    }

    const changeVisibleState = ()=>{
        setVisible(!visible)
    }

    return <>
        <button onClick={changeNumberState}>PLUS</button>
        <button onClick={changeVisibleState}>ON/OFF</button>
        {visible && <Mycomponent number={number}></Mycomponent>}
    </>
}