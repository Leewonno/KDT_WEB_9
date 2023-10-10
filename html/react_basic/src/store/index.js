import {createSlice, configureStore} from '@reduxjs/toolkit';
import loginSlice from './login';
import counterSlice from './counter';
// const initialCounter = {
//     counter : 10,
// }

// // createSlice() : 리듀서와 액션을 함께 생성하는 함수
// const counterSlice = createSlice({
//     name:'counter',
//     initialState : initialCounter,
//     reducers:{
//         increment(state){
//             state.counter++;
//         },
//         decrement(state){
//             state.counter--;
//         },
//         calc(state, action){
//             console.log(action)
//         }
//     }
// })

// const initLogin = {
//     isLogin:false,
// }

// const loginSlice = createSlice({
//     name:"login",
//     initialState:initLogin,
//     reducers: {
//         login(state){
//             state.isLogin = true;
//         },
//         logout(state){
//             state.isLogin = false;
//         }
//     },
// })

const store = configureStore({
    reducer: {count : counterSlice, login:loginSlice},
});



// export const counterAction = counterSlice.actions;
// export const loginAction = loginSlice.actions;
export default store;