import { Component } from "react";

class Counter extends Component{

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
        number:0,
    }

    handleIncrement = ()=>{
        this.setState({number:this.state.number + 1});
        console.log(this);
    }

    handleDecrement = ()=>{
        console.log(this)
        // setState 호출 직후에 상태가 바로 업데이트되지 않는다.
        // 리액트는 여러 setState가 있어도 일괄처리한다. // -1을 두번해도 한번만 실행됨
        // this.setState({number:this.state.number - 1});

        // 화살표 함수를 이용하면 이전상태가 처리된 후 실행되기 때문에 두번 감소된다.
        this.setState((prevState)=>{
            return {number: prevState.number - 1};
        })

        this.setState((prevState)=>{
            return {number: prevState.number - 1};
        })
    }


    render(){
        return <div>
            <h1>{this.state.number}</h1>
            <button onClick={this.handleIncrement}>증가</button>
            <button onClick={this.handleDecrement}>감소</button>
        </div>
    }
}

export default Counter;