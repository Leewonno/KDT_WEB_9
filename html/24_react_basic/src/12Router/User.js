import { Link, useSearchParams } from "react-router-dom"


export const users = [
    {
        id:1,
        name:"홍길동",
        comment: [
            {
                text:"안녕하세요~"
            }
        ]
    },
    {
        id:2,
        name:"이몽룡",
        comment: [
            {
                text:"반가워요"
            },
            {
                text:"어서오세요"
            }
        ]
    },
    {
        id:3,
        name:"성춘향",
        comment: [
            {
                text:"하이~"
            },
            {
                text:"굿데이 커맨더"
            }
        ]
    }
]

export default function User(){

    // searchParams는 쿼리스트링 값을 가져오는 것
    // setSearchParams는 쿼리스트링 값을 할당
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('name'));

    // setTimeout(()=>{
    //     setSearchParams({mode:"dddd"});
    // }, 5000)

    return <div>
        <ul>
            {users.map((value)=>{
                return <li key={value.id}><Link to={`/user/${value.id}`}>{value.name}</Link></li>
            })}
        </ul>
    </div>
}