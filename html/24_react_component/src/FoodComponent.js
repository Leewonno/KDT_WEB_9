// class 형 컴포넌트

import { Component } from "react"; // 1번 방법
import propTypes from 'prop-types'

class FoodComponent extends Component{
    render(){
        return (<>
            <h1>제가 좋아하는 음식은 <span style={{color:"red"}}>{this.props.food}</span> 입니다.</h1>
        </>);
    }
}

FoodComponent.defaultProps = {
    food:"음식명"
}

FoodComponent.propTypes = {
    // .isRequired 붙이면 필수로 입력하게 해야한다
    food:propTypes.string,
}

export default FoodComponent;