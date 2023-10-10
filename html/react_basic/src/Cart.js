import { useContext } from "react";
import MyContext from "./store/lang2-context";

export default function Cart(){

    const value = useContext(MyContext);

    const handleCartDelete = (index)=>{
        let temp = value.cart.filter((item, idx) => {
            return idx !== index;
        });
        value.setAllPrice(value.allPrice - Number(value.cart[index].price));
        value.setCart(temp);
    }

    return <>
        <div>
            <h1>카트에 담긴 제품</h1>
            {value.cart.map((value, index)=>{
                return <div key={index}>
                    <span>상품명 : {value.name} | </span>
                    <span>가격 : {value.price}</span>
                    <button onClick={()=>handleCartDelete(index)}>제거</button>
                </div>
            })}
        </div>
    </>
}