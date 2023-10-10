import { useContext } from "react";
import MyContext from "./store/lang-context";

export default function LanguagePractice1(){

    const value = useContext(MyContext);
    console.log(value)

    return <>
        <div>
            <h2>현재 선택된 언어 : {value.language}</h2>
            <h2>현재 선택된 테마 : {value.thema}</h2>
            <select value={value.language} onChange={(e)=> value.setLanguage(e.target.value)}>
                <option value={"Korean"}>한국어</option>
                <option value={"English"}>영어</option>
            </select>
            <select value={value.thema} onChange={(e)=> value.setThema(e.target.value)}>
                <option value={"light"}>라이트</option>
                <option value={"dark"}>다크</option>
            </select>
        </div>
    </>
}