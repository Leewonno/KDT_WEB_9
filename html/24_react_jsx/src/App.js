import logo from './logo.svg';
import './App.css';

function App() {
  const flag = false;
  const flag2 = true;
  let txt;

  if(flag2){
    txt = "true입니다.";
  }
  else{
    txt = "false입니다.";
  }

  // 무조건 camel 케이스로 해줘야한다.
  const styles = {
    backgroundColor:"black",
    color:"white",
  }

  const name = "로이"
  const animal = "강아지"

  const underLine = {
    textDecoration: "underline"
  }

  const test = {
    backgroundColor : "#f9ecd7",
    color:"red",
    fontSize:"30px",
    textAlign:"center",
    padding:"10px",
    marginBottom:"20px"
  }

  const input = {
    marginBottom:"20px"
  }

  const title = "Hello World";

  const red = {
    backgroundColor:"red",
    width:"30px",
    height:"40px"
  }

  const orange = {
    backgroundColor:"orange",
    width:"30px",
    height:"80px"
  }

  const yellow = {
    backgroundColor:"yellow",
    width:"30px",
    height:"120px"
  }

  const green = {
    backgroundColor:"green",
    width:"30px",
    height:"160px"
  }

  const blue = {
    backgroundColor:"blue",
    width:"30px",
    height:"200px"
  }

  const dakrblue = {
    backgroundColor:"darkblue",
    width:"30px",
    height:"240px"
  }

  const purple = {
    backgroundColor:"purple",
    width:"30px",
    height:"280px"
  }

  const lists = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

  const animals = ['dog', 'cat', 'rabbit'];
  const newA = animals.filter((value)=>{
    return value.includes('a');
  })
  console.log(newA);

  // 단축평가
  // && 연산자
  const result = false && "hello";
  console.log(result);

  const defaultValue = 1000;
  const price = 500;
  const dbPrice = price || defaultValue;
  console.log(dbPrice);

  const users = [
    {id:1, name:"John", age:25, vip:true},
    {id:2, name:"Jane", age:19, vip:false},
    {id:3, name:"Alice", age:30, vip:true},
    {id:4, name:"Bob", age:18, vip:false},
    {id:5, name:"Charlie", age:35, vip:true},
  ]

  const res = users.filter((value)=>{
    return value.age > 20;
  })
  console.log(res);



  // const data = true && true;

  // if(!data){
  //   return
  // }

  const isLogin = true;

  return (
      <>
        <h1 style={{ backgroundColor: 'black', color: 'white' }}>Hello React</h1>
        {isLogin && (
          <>
            <h1 style={{backgroundColor:"red", color:"white"}}>Hello React</h1>
            <div style={styles}>리액트 시작</div>
            <input />
            <div>{flag ? "true입니다." : "false입니다."}</div>
            <div>{txt}</div>
            <div>이것은 div입니다.
              <h3>이것은 div 안에 있는 h3 태그입니다.</h3>
            </div>
            <div>{3+5==8? "정답입니다.":"오답입니다!"}</div>
          
            <h2>제 반려 동물의 이름은 <span style={underLine}>{name}</span>입니다.</h2>
            <h2><span style={underLine}>{name}</span>는 <span style={underLine}>{animal}</span>입니다.</h2>
          

            <div style={test}>
              {title}
            </div>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
              <div>
                <label>아이디 : </label>
                <input type='text' style={input}></input>
              </div>
              <div>
                <label>비밀번호 : </label>
                <input type='password' style={input}></input>
              </div>
            </div>

            <div style={red}></div>
            <div style={orange}></div>
            <div style={yellow}></div>
            <div style={green}></div>
            <div style={blue}></div>
            <div style={dakrblue}></div>
            <div style={purple}></div>

            {
              // 2번째 매개변수가 index
              res.map((value, index)=>{
                return <div key={index}>
                    <p>-{value.name}</p>
                  </div>
              })
            }
          </>
        )}
    </>
  );
}

export default App;
