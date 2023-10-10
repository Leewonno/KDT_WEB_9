import { useDispatch} from 'react-redux';
import { ADD_TODO} from './store/item';

const lists = [
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

export default function ProductList(){

    // const value = useContext(MyContext);
    // const value = useSelector(state => state);
    const dispatch = useDispatch();

    const addCart = (cart)=>{
        dispatch(ADD_TODO);
    }

    return <>
        <div>
            <h1>제품 리스트</h1>
            {lists.item.map((value, index)=>{
                return <div>
                    <span>상품명 : {value.name} | </span>
                    <span>가격 : {value.price}</span>
                    <button onClick={()=>addCart(value)}>장바구니 추가</button>
                </div>
            })}
        </div>
    </>
}




// export default function Main(){

//     const [text, setText] = useState();

//     const todos = useSelector(state => state);
//     console.log(todos);

//     // dispatch는 우리가 호출 할 수 있는 함수
    

//     const onSubmit = (e)=>{
//         e.preventDefault();
//         dispatch({type:ADD_TODO, text});
//         setText('');

//     }

//     const handleDelete = (id)=>{
//         dispatch({ type: DELETE_TODO, id });
//     }

// }