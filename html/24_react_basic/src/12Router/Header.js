import {Link, useNavigate} from "react-router-dom";

// Link 유저가 주소를 직접 클릭
// useNavigate : Link 컴포넌트를 사용하지 않고 다른 페이지로 이동해야 하는 경우, 뒤로가기 등에 사용

export default function Header(){

    // useNavigate() : Link 컴포넌트를 사용하지 않고 사용자를 어딘가로 이동시키는 기능
    // 클릭하지 않고 사용자를 원하는 곳으로 이동시킬 수 있다.
    const navi = useNavigate();
    const onClikc = ()=>{
        // '/' 가 붙지 않으면 계속 주소 뒤에 붙는다.
        navi('/redirect');
    }

    return <div>
        <ul>
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/user">User</Link>
            </li>
            {/* <li onClick={onClikc}>Redirect</li> */}
        </ul>
    </div>
}