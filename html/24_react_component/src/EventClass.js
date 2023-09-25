import { Component } from "react";

class EventClass extends Component{

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        alert("클래스형 컴포넌트")
    }

    handleClick2 = ()=>{
        alert("클래스형 컴포넌트2")
    }

    render(){
        return <>
            <button onClick={this.handleClick}>클릭Class</button>
            <button onClick={this.handleClick2}>클릭Class2</button>
        </>
    }
}

export default EventClass;