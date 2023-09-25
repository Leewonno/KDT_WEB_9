import {useState, useMemo} from 'react';

export default function UseMemo(){
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');


    // 엄청 복잡한 함수라고 가정
    // useMemo를 지우면 함수가 실행되어도 바뀌지 않는다
    // inputValue가 변경되어도 컴포넌트는 리랜더링되지만, calc는 다시 계산되지 않는다.
    // 제공된 함수의 반환값을 기억하며, 의존성 배열의 값(count)이 변경될때만 해당 함수를 재실행
    const calc = useMemo(()=>{

        // for(let i = 0; i<10000; i++){
        //     i = i * 8
        // }

        return count * 2;
    }, [count])
    // count가 변할때만 실행되도록 해라
    
    

    return <>
        <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)}></input>
        <button onClick={()=>setCount(()=>count + 1)}>PLUS</button>
        <p>count : {count}</p>
        <p>calc : {calc}</p>
    </>
}