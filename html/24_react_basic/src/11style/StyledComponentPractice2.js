import styled from 'styled-components';
import { useState } from 'react';

const _Btn = styled.button`
    background-color: rgb(135 206 235);
    color: black;
`

const _Input = styled.input`
    border: 2px solid #e5e5e5;
`

const _Ol = styled.ol`
    width: 300px;
    max-height: 200px;
    overflow-y: scroll;
`

const _Li = styled.li`
    margin-bottom: 10px;
    border-bottom: 1px solid #e5e5e5;
`

export default function StyledComponentPractice1(){

    const [results, setResults] = useState([]);
    const [inputData, setInputData] = useState("");


    const onChange = (e) => {
        setInputData(e.target.value);
    };

    const addList = () => {

        const newResult = {
            data: inputData,
        };
        setResults([...results, newResult]);
        setInputData("");
        
    };

    return <>
        <_Input onChange={onChange}></_Input>
        <_Btn onClick={addList}>add</_Btn>
        <_Ol>
            {results.map((value, index) => {
                return (
                    <_Li key={index}>
                        {value.data}
                    </_Li>
                );
            })}
        </_Ol>
    </>
}