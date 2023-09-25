import { Component } from "react";

class Display extends Component{
    state = {
        content:"안녕하세요",
        btn:"사라져라",
        dis:"block",
        btnState:"block",
        btnState2:"none"
    }

    handleDisplayNone = ()=>{
        this.setState({dis:"none",btn:"보여라", btnState:"none", btnState2:"block"});
    }

    handleDisplay = ()=>{
        this.setState({dis:"block",btn:"사라져라", btnState:"block", btnState2:"none"});
    }

    


    render(){
        return <div>
            <div>
                <h1 style={{display:this.state.dis}}>{this.state.content}</h1>
            </div>
            <button style={{display:this.state.btnState}} onClick={this.handleDisplayNone}>{this.state.btn}</button>
            <button style={{display:this.state.btnState2}} onClick={this.handleDisplay}>{this.state.btn}</button>
        </div>
    }
}

export default Display;
