// class 형 컴포넌트

import { Component } from "react"; // 1번 방법
import React from "react"; // 2번 방법
import propTypes from 'prop-types'

// class 컴포넌트명 extends Component() // 1번 방법
// class ClassComponent extends React.Component{} // 2번 방법
class ClassComponent extends Component{
    // 클래스형 컴포넌트에서는 render 함수는 필수!
    render(){
        const name ="홍길동";
        return (<>

            <h1>Hello {this.props.name}</h1>
            <h2>그의 나이는 {this.props.age} 살입니다.</h2>
            <p>여기는 클래스형 컴포넌트</p>

        </>);
    }
}

ClassComponent.defaultProps = {
    name:"홍길동",
    age:"알수없음",
}

ClassComponent.propTypes = {
    // .isRequired 붙이면 필수로 입력하게 해야한다
    name:propTypes.string,
    age:propTypes.number
}

export default ClassComponent;