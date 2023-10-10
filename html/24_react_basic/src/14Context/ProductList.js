import { useContext } from "react";
import MyContext from "./store/lang2-context";



export default function ProductList(){

    const value = useContext(MyContext);

    const addCart = (cart)=>{
        value.setCart([...value.cart, cart]);
        value.setAllPrice(value.allPrice + Number(cart.price));
    }

    return <>
        <div>
            <h1>제품 리스트</h1>
            {value.item.map((value, index)=>{
                return <div>
                    <span>상품명 : {value.name} | </span>
                    <span>가격 : {value.price}</span>
                    <button onClick={()=>addCart(value)}>장바구니 추가</button>
                </div>
            })}
        </div>
    </>
}