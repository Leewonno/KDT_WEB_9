import styled from 'styled-components';


// 기본 사용 방법
const _Boxone = styled.div`
    background-color : blue;
    width:100px;
    height:100px;
`

// props 이용하는 방법
const _Boxtwo = styled.div`
    background-color : ${(props)=>props.color};
    width:100px;
    height:100px;
`

const _Circle = styled.div`
    background-color: ${(props)=>props.color};
    width: 100px;
    height: 100px;
    border-radius: 50%;
`

const _Btn = styled.button`
    background-color: aqua;
    color: red;
    padding: 10px 15px;
    border-radius: 4px;
`

// html 태그에 옵션값을 넣는 방법
const _Input = styled.input.attrs({required:true})`
    background-color: yellow;
`

// 중첩
const _Boxthree = styled.div`
    width: 100px;
    height: 100px;
    background-color: pink;
    text-align: center;
    line-height: 100px;
    /* 다른 컴포넌트 불러와서 사용 */
    ${_Input}{
        background-color: blueviolet;
    }

    p{
        color: white;

        /* pseudo */
        &:hover{
            font-size: 30px;
        }
    }
`

export default function StyledComponents(){
    return <>
        <div></div>
        <div></div>
        <_Boxone as='header'></_Boxone>
        <_Boxtwo color={'red'}></_Boxtwo>
        <_Circle color={'green'}></_Circle>
        <_Btn>클릭</_Btn>
        <_Btn as="a" href='https://www.naver.com' target='_blank'>클릭</_Btn>
        <_Input maxLength='10'></_Input>

        <_Boxthree>
            <p>안녕</p>
            <_Input></_Input>
        </_Boxthree>
    </>
}