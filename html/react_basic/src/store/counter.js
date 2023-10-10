import { createSlice } from "@reduxjs/toolkit";

const initialCounter = {
    counter : 10,
}

// createSlice() : 리듀서와 액션을 함께 생성하는 함수
const counterSlice = createSlice({
    name:'counter',
    initialState : initialCounter,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        calc(state, action){
            console.log(action)
        }
    }
})

export const counterAction = counterSlice.actions;
export default counterSlice.reducer