import styled from 'styled-components';
import { useState } from 'react';

const _Btn = styled.button`
    background-color: ${(props)=> props.bgcolor};
    color: ${(props)=>props.color};
`

export default function StyledComponentPractice1(){

    const [color, setColor] = useState("white");
    const [bgcolor, setBgolor] = useState("blue");

    const handleChange = ()=>{

        if(color=='white'){
            setColor("black");
        }else{
            setColor("white");
        }

        if(bgcolor=='blue'){
            setBgolor("red");
        }
        else{
            setBgolor("blue");
        }
    }

    return <>
        <_Btn color={color} bgcolor={bgcolor} onClick={handleChange}>색상변경!</_Btn>
    </>
}