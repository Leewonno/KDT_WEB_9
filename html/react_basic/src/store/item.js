import {createStore} from 'redux'



//상수의 변수
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';


//reducer
const itemReducer = (state = [], action) => {
    console.log(action);
    switch (action.type) {
        case ADD_TODO:
            const newTodo = { id: action.id, name:action.name, price:action.price };
            return [newTodo, ...state];
        case DELETE_TODO:
            const remove = state.filter((e) => e.id !== action.id);
            return remove;
        default:
            return state;
    }
};

//store
const item = createStore(itemReducer);


export default item;