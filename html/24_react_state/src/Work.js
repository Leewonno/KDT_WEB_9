import { useState } from "react";

export default function Work(){
    const [work, setWork] = useState("");
    const [checks, setCheck] = useState(false);
    const [number, setNumber] = useState(1);
    const [working, setWorking] = useState([])

    const handleWork = (e)=>{
        setWork(e.target.value);
    }

    const handleAdd = ()=>{
        setNumber(number + 1);
        if(number >= 10){
            alert("할 일이 너무 많습니다!");
        }
        else{
            working.push({work, number, checks});
        }
    }

    const handleCheck = (e)=>{
        console.log(e.target.value);
        for(let i = 0; i<working.length; i++){
            if(working[i].number == Number(e.target.value)){
                if(working[i].checks == true){
                    working[i].checks = false
                }else{
                    working[i].checks = true
                }
            }
        }
        
    }
    

    const handelDelete = ()=>{
        let result = working.filter((value)=>{
            return value.checks === false
        })

        setWorking(result);
        // console.log(working);
    }

    return(
        <>
            <div>
                <input type="text" placeholder="할 일 입력..." onChange={handleWork}></input>
                <button type="button" onClick={handleAdd}>추가</button>
            </div>
            <ol>
                {working.map((value, index) => {
                    return (
                        <li key={index}>
                            <input type="checkbox" onClick={handleCheck} value={value.number}></input>
                            <span>{value.work}</span>
                        </li>
                    )
                }
            )}
            </ol>

            <div>
                <button onClick={handelDelete}>완료된 할 일 삭제</button>
            </div>
        </>
    )
}