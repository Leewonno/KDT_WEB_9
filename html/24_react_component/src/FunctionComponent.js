// 함수형 컴포넌트
// function 컴포넌트명 or const 컴포넌트명 = ()=>{}

function FunctionComponent(){
    const myClass = 'kdt9'

    return (<>
        <h1>반갑습니다. {myClass}에 오신것을 환영합니다.</h1>
        <p>여기는 함수형 컴포넌트</p>
    </>);
}

export default FunctionComponent;