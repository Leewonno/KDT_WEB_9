import { useParams, Link, Outlet } from "react-router-dom"
import {users} from "./User";

export default function UserDetail(){

    // Router에 /user/:userid
    const params = useParams();
    console.log(params);

    return <div>
        <div>
            사용자 {params.userid}는 {users[Number(params.userid) - 1].name} 입니다. 
        </div>
        <Link to="comment">comment</Link>
        <Outlet context={{comment:users[Number(params.userid) - 1].comment}}></Outlet>
    </div>
}