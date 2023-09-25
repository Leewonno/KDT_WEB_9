// 함수형 컴포넌트
// function 컴포넌트명 or const 컴포넌트명 = ()=>{}

import propTypes from 'prop-types';

function FunctionComponent(props){
    // function FunctionComponent({myClass}){ // 객체구조분해할당
    // const myClass = 'kdt9'

    return (<>
        <h1>반갑습니다. {props.myClass}에 오신것을 환영합니다.</h1>
        <p>여기는 함수형 컴포넌트</p>
        <h2>{props.children}</h2>
    </>);
}

FunctionComponent.defaultProps = {
    myClass:"kdt",
}

FunctionComponent.propTypes = {
    myClass:propTypes.string
}

export default FunctionComponent;