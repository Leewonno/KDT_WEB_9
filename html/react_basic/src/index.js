import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
// import item from './store/item';
// import cart from './store/cart';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)


// import {createStore} from 'redux';

// const data = document.querySelector("#data");
// const add = document.querySelector("#add");
// const ul = document.querySelector("ul");
// const deletes = document.querySelector(".delete");

// const ADD = "ADD";

// const countReducer = (state = 0, action)=>{
//   switch(action.type){
//     case "ADD":
//       return state + 1;
//     default:
//       return state;
//   }
// }

// const arrayReducer = (state = [], action)=>{
//   switch(action.type){
//     case "ADD":
//       console.log(state)
//       state.push({id:countStore.getState(), data:data.value});
//       return state;
//     case "DELETE":
//       console.log("d")
//       let temp = arrayStore.getState().filter((item, id) => {
//         return id !== action.id;
//       });
//       state = temp;
//       return state;
//     default:
//       console.log("실행")
//       return state;
//   }
// }

// const countStore = createStore(countReducer);
// console.log(countStore);

// const arrayStore = createStore(arrayReducer);
// console.log(arrayStore);

// // subscribe()는 데이터와 저장소가 변경될때마다 함수를 실행
// countStore.subscribe(()=>{
//   arrayStore.dispatch({type:ADD});

//   ul.innerHTML = ""

//   arrayStore.getState().map((value, index)=>{
//     return ul.innerHTML += `<li id=${value.id}>${value.data}<button type="button" class="delete" value="${value.id}">삭제</button></li>`
//   })
// });

// add.addEventListener('click', ()=>{
//   countStore.dispatch({type:ADD});
// })

// deletes.forEach(function(event){
//   event.addEventListener("click", (e)=>{
//     arrayStore.dispatch({type:"DELETE", id:e.target.value})
//   });
// });


// redux를 이용한 숫자 증가, 감소 코드
// import {createStore} from 'redux';

// const add = document.querySelector("#add");
// const minus = document.querySelector("#minus");
// const num = document.querySelector("#num");

// // 개발자니까!
// // 문자열대신 상수를 이용하자
// const ADD = "ADD";
// const MINUS = "MINUS"

// // store는 데이터를 저장하는 곳
// // createStore : store 생성, 리듀서 함수 필수
// const countReducer = (state = 0, action)=>{
//   console.log(state, action);

//   // redux에서는 if 문 대신 switch문 이용
//   switch(action.type){
//     case ADD:
//       return state + 1;
//     case MINUS:
//       return state - 1;
//     default:
//       return state;
//   }
// }
// const countStore = createStore(countReducer);
// console.log(countStore);

// // subscribe()는 데이터와 저장소가 변경될때마다 함수를 실행
// countStore.subscribe(()=>{
//   num.textContent = countStore.getState();
// });

// add.addEventListener('click', ()=>{
//   countStore.dispatch({type:ADD});
// })

// minus.addEventListener('click', ()=>{
//   countStore.dispatch({type:MINUS});
// })

// 자바스크립트를 이용한 숫자 증가, 감소 코드


// let count = 0;

// add.addEventListener("click", ()=>{
//   count += 1;
//   num.textContent = count;
// })

// minus.addEventListener("click", ()=>{
//   count -= 1;
//   num.textContent = count;
// })