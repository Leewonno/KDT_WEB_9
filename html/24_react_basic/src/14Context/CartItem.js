import { useContext } from "react";
import MyContext from "./store/lang2-context";

export default function Cart(){

    const value = useContext(MyContext);


    return <>
        <div>
            <h1>카트에 담긴 제품들의 가격 : {value.allPrice}</h1>
        </div>
    </>
}