import React from "react";

class RefSampleClass2 extends React.Component{

    myInput = React.createRef();

    handleFocus = ()=>{
        this.myInput.current.focus();
    }

    render(){
        return <>
            <p>내장함수 / (클래스형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>

            <input ref={this.myInput}></input>
            <button onClick={this.handleFocus}>focus</button>
        </>
    }
}

export default RefSampleClass2;