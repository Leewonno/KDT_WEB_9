import { useState, useEffect } from "react"
import axios from "axios"

function MyData(){
    const [state, setState] = useState([]);

    useEffect(()=>{
        // userEffect 는 비동기함수를 직접적으로 지원하지 않음
        // 비동기 함수를 사용하려면 내부에 비동기 함수를 정의하고 바로 호출
        console.log("유저 정보 업데이트", state.length);
    });

    useEffect(()=>{
        axios({
            method:"get",
            url:"https://jsonplaceholder.typicode.com/users",
        }).then((res)=>{
            setState(res.data);
        })

        return ()=>{
            console.log("연결이 해제되었습니다.");
        }
    }, [])

    return <>
        {state.map((value, index) => {
                return (
                    <li key={index}>
                        {value.name} - {value.email}
                    </li>
                )
            }
        )}
    </>

    
}

export default function Practice2(){
    return <>
        <ul>
            <MyData></MyData>
        </ul>
        
    </>
}