import { Component } from "react";


let userVisitor = [];

class Visitor extends Component{
    constructor(props){
        // 부모 클래시인 Component의 생성자 호출
        super(props);

        this.state = {
            name:"",
            title:"",
            number:1,
            search:"",
            select:"name"
        }

        // 일반형 함수를 쓸때는 항상 바인딩을 해줘야한다.
        this.handleWriteName = this.handleWriteName.bind(this)
        this.handleWriteTitle = this.handleWriteTitle.bind(this)
        this.handleWriteSend = this.handleWriteSend.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleSearchInput = this.handleSearchInput.bind(this)
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleWriteName(e){
        this.setState({name:e.target.value})
    }

    handleWriteTitle(e){
        this.setState({title:e.target.value})
    }

    handleWriteSend(){
        this.setState({number:this.state.number + 1})
        userVisitor.push(this.state)
        document.querySelector("tbody").innerHTML += `<tr>
            <td>${this.state.number}</td>
            <td>${this.state.name}</td>
            <td>${this.state.title}</td>
        </tr>`
    }


    handleSearchInput(e){
        this.setState({search:e.target.value});
    }

    handleSearch(){
        const result = userVisitor.filter((user)=>{
            if(this.state.select == "name"){
                return user.name.includes(this.state.search);
            }
            else{
                return user.title.includes(this.state.search);
            }
            
        })
        console.log(result.length);

        document.querySelector("tbody").innerHTML = "";

        for(let i = 0; i<result.length; i++){
            document.querySelector("tbody").innerHTML += `<tr>
                <td>${result[i].number}</td>
                <td>${result[i].name}</td>
                <td>${result[i].title}</td>
            </tr>`
        }

        console.log(result)
    }

    handleSelect(e){
        this.setState({select:e.target.value});
    }

    render(){

        return<>
            <div>
                <form>
                    <fieldset>
                        <label for="name">작성자 : </label><input onChange={this.handleWriteName} type="text" placeholder="작성자" id="name" ></input>
                        <label for="title">제목 : </label><input onChange={this.handleWriteTitle} type="text" id="title"></input>
                        <button type="button" onClick={this.handleWriteSend}>작성</button>
                    </fieldset>
                </form>
            </div>

            <div>
                <select onChange={this.handleSelect}>
                    <option value={"name"}>작성자</option>
                    <option value={"title"}>제목</option>
                </select>
                <input onChange={this.handleSearchInput} type="text" placeholder="검색어" id="search"></input>
                <button type="button" onClick={this.handleSearch}>검색</button>
            </div>

            <div>
                <table border={1}>
                    <thead>
                    <tr>
                        <th>번호</th>
                        <th>작성자</th>
                        <th>제목</th>
                    </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </>
    }
}

export default Visitor;