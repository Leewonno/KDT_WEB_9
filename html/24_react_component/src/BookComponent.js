// 함수형 컴포넌트
// function 컴포넌트명 or const 컴포넌트명 = ()=>{}

import propTypes from 'prop-types';

function BookComponent(props){
    // function FunctionComponent({myClass}){ // 객체구조분해할당
    // const myClass = 'kdt9'

    return (<>
        <div style={{display:"flex", flexDirection:"column", padding:"20px", justifyContent:"center", alignItems:"center", backgroundColor:"lightgreen"}}>
            <h3 style={{color:"red"}}>이번주 베스트셀러</h3>
            <img style={{width:"300px"}} src='XL.jpg'></img>
            <h4 style={{width:"300px"}}>{props.title}</h4>
            <div style={{width:"300px"}}>
                <p>저자:{props.author}</p>
                <p>판매가:{props.price}원</p>
                <p>구분:{props.type}</p>
            </div>
        </div>
    </>);
}

BookComponent.defaultProps = {
    title:"제목",
    author:"작가",
    price:"가격",
    type:"구분",
}

BookComponent.propTypes = {
    title:propTypes.string,
    author:propTypes.string,
    price:propTypes.string,
    type:propTypes.string,
}

export default BookComponent;