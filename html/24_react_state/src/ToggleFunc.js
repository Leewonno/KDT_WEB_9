import {useState} from "react";

export default function ToggleFunc(){

    // 
    const [status, setStatus] = useState(false);

    const handleToggle = ()=>{
        if(status === false){
            setStatus(true);
        }
        else{
            setStatus(false);
        }
    }

    return (
        <>
            <button onClick={handleToggle}>토글</button>
            {/* true일때만 보여라 */}
            <p>{status && '보여라'}</p>
        </>
    )
}