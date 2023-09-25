import { Component } from "react";

class ChangeColor extends Component{

    // constructor(props){
    //     // 부모 클래시인 Component의 생성자 호출
    //     super(props);

    //     this.state = {
    //         number:0,
    //     }

    //     // 일반형 함수를 쓸때는 항상 바인딩을 해줘야한다.
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }

    state = {
        content:"검정색 글씨",
        cl:"black"
    }

    handleRed = ()=>{
        this.setState({content:"빨간색 글씨", cl:"red"});
        console.log(this);
    }

    handleBlue = ()=>{
        this.setState((prevState)=>{
            return {content:"파란색 글씨", cl:"blue"};
        })
    }


    render(){
        return <div>
            <div>
                <h1 style={{color:this.state.cl}}>{this.state.content}</h1>
            </div>
            <button onClick={this.handleRed}>빨간색</button>
            <button onClick={this.handleBlue}>파란색</button>
        </div>
    }
}

export default ChangeColor;
