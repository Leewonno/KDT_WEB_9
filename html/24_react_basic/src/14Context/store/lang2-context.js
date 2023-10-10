import {createContext, useState} from "react";

// Context 생성
// createContext() : Provider와 Consumer 두 개의 리액트 컴포넌트를 반환
// 컴포넌트 아님
const MyContext = createContext({
    item:[],
    setItem: ()=>{},
    cart:[],
    setCart:()=>{},
    allPrice:0,
    setAllPrice:()=>{},
});

const list = [
    {
        id:1,
        name:"엔믹스 앨범",
        price:"22000"
    },
    {
        id:2,
        name:"뉴진스 앨범",
        price:"20000"
    },
    {
        id:3,
        name:"아이브 앨범",
        price:"18000"
    }
]

export function StoreProvider({children}){
    // const [language, setLanguage] = useState("Korean");
    const [item, setItem] = useState(list);
    const [cart, setCart] = useState([]);
    const [allPrice, setAllPrice] = useState(0);

    return <MyContext.Provider value={{item, setItem, cart, setCart, allPrice, setAllPrice}}>
        {children}
    </MyContext.Provider>
}

export default MyContext;