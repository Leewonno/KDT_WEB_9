import {createContext, useState} from "react";

// Context 생성
// createContext() : Provider와 Consumer 두 개의 리액트 컴포넌트를 반환
// 컴포넌트 아님
const MyContext = createContext({
    language:'',
    // abc:0,
    setLanguage:()=>{},
    thema:'',
    setThema:()=>{},
});

export function LanguageProvider({children}){
    const [language, setLanguage] = useState("Korean");
    const [thema, setThema] = useState("light");

    return <MyContext.Provider value={{language, setLanguage, thema, setThema}}>
        {children}
    </MyContext.Provider>
}

export default MyContext;