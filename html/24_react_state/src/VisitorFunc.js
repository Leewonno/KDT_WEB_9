import { useState } from "react";

const userVisitor = [];

export default function VisitorFunc(){
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [number, setNumber] = useState(1);
    const [search, setSearch] = useState("");
    const [select, setSelect] = useState("name");



    const handleWriteName = (e)=>{
        setName(e.target.value);
    }

    const handleWriteTitle = (e)=>{
        setTitle(e.target.value)
    }

    const handleWriteSend = ()=>{
        setNumber(number + 1);
        
        userVisitor.push({name, title, number})
        document.querySelector("tbody").innerHTML += `<tr>
            <td>${number}</td>
            <td>${name}</td>
            <td>${title}</td>
        </tr>`
    }

    const handleSearchInput = (e)=>{
        setSearch(e.target.value)
    }

    const handleSearch = ()=>{
        const result = userVisitor.filter((user)=>{
            if(select == "name"){
                return user.name.includes(search);
            }
            else{
                return user.title.includes(search);
            }
            
        })

        document.querySelector("tbody").innerHTML = "";

        for(let i = 0; i<result.length; i++){
            document.querySelector("tbody").innerHTML += `<tr>
                <td>${result[i].number}</td>
                <td>${result[i].name}</td>
                <td>${result[i].title}</td>
            </tr>`
        }
    }

    const handleSelect = (e)=>{
        setSelect(e.target.value)
    }

    return(
        <>
            <div>
                <form>
                    <fieldset>
                        <label for="name">작성자 : </label><input onChange={handleWriteName} type="text" placeholder="작성자" id="name" ></input>
                        <label for="title">제목 : </label><input onChange={handleWriteTitle} type="text" id="title"></input>
                        <button type="button" onClick={handleWriteSend}>작성</button>
                    </fieldset>
                </form>
            </div>

            <div>
                <select onChange={handleSelect}>
                    <option value={"name"}>작성자</option>
                    <option value={"title"}>제목</option>
                </select>
                <input onChange={handleSearchInput} type="text" placeholder="검색어" id="search"></input>
                <button type="button" onClick={handleSearch}>검색</button>
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
    )
}