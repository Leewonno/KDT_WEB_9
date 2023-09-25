import img from './lion.png'

function test2(){
    const style = {
        color:"orange", fontSize:"40px", marginTop:"20px"
    }
    return (<>
        <div style={style}>
            <h2>안녕하세요</h2>
            <img src={img}></img>
        </div>
    </>);
}

export default test2;

