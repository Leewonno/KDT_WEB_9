import { useParams, Link, Outlet, useSearchParams } from "react-router-dom"

export default function Student(){

    const params = useParams();

    return <div style={{ backgroundColor:"#f7f3dc"}}>
        <div style={{fontWeight:"600"}}>
            학생의 이름은 <span style={{color:"green"}}>{params.id}</span> 입니다.
        </div>
        <Outlet></Outlet>
        
        <button><Link to='/' style={{textDecoration:"none"}}>이전페이지로</Link></button>
    </div>
}