import {Link} from "react-router-dom";

export default function P_Home(){

    return <div style={{display:"flex", backgroundColor:"#f7f3dc"}}>
        <Link to="/"><h2>ReactRouter 실습</h2></Link>
        <nav>
            <ul style={{display:"flex"}}>
                <li style={{margin:'4px', listStyle:"none"}}>
                    <Link to="/student/kdt">학생KDT</Link>
                </li>
                <li style={{margin:'4px', listStyle:"none"}}>
                    <Link to="/student/codingon">코딩온</Link>
                </li>
                <li style={{margin:'4px', listStyle:"none"}}>
                    <Link to="/student/new?name=kdt3rd">searchParams</Link>
                </li>
            </ul>
        </nav>
        
    </div>
}