import React, {useState} from "react"
import { useRef } from "react"

interface props {
    name?:string
}

interface Data{
    name:string,
    age:number,
}

// 컴포넌트 제작방법2
const Types:React.FC<props> = (props)=>{

    const [count, setCount] = useState<Data | null>(null);

    const myInput = useRef<HTMLInputElement>(null);

    return <>
        <h2>Hello {props.name}</h2>
        <input ref={myInput}></input>
    </>
}

export default Types;

// 컴포넌트 제작 방법1
// export default function Types({name}:props){
//     return <>
//         <h2>Hello {name}</h2>
//     </>
// }