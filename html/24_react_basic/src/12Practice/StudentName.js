import { useParams, Link, Outlet, useSearchParams } from "react-router-dom"

export default function Student(){

    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams)

    if(searchParams.size>0){
        return <>
            <div style={{fontWeight:"600"}}>
                실제 이름은 <span style={{color:"red"}}>{searchParams.get('name')}</span> 입니다.
            </div>
        </>
    }
    else{
        return <>
        
        </>
    }
    
}