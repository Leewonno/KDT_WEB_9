import logo from './logo.svg';
import './App.css';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import Practice1 from './Practice1';
import Test2 from './test2';
import Test from './test';
import FoodComponent from './FoodComponent';
import BookComponent from './BookComponent';
import Event from './Event';
import EventClass from './EventClass';
import EventPractice from './EventPractice';

function App() {
  return <>
    <ClassComponent name="이원노" age={10}></ClassComponent>
    <FunctionComponent myClass="kdt9" />
    <FunctionComponent>안녕하세요~</FunctionComponent>
    <ClassComponent></ClassComponent>
    <Practice1></Practice1>

    <Test></Test>
    <Test2></Test2>

    <FoodComponent food="맥도날드"></FoodComponent>
    <FoodComponent></FoodComponent>
    <BookComponent title="나의 하루는 4시 40분에 시작된다." price="13,500" type="자기계발서"></BookComponent>

    <Event></Event>
    <EventClass></EventClass>

    <EventPractice message="안녕하세요 메시지입니다."></EventPractice>
  </>
}

export default App;
