import {createStore} from 'redux'
// import { ADD_TODO, DELETE_TODO } from './item';

const cartReducer = (state = [], action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TODO":
            const newTodo = { id: action.id, name:action.name, price:action.price };
            return [...state, newTodo];
        case "DELETE_TODO":
            const remove = state.filter((e) => e.id !== action.id);
            return remove;
        case "PRICE":
            return state.reduce((acc, curr) => acc + curr.price, 0)
        default:
            return state;
    }
};

const cart = createStore(cartReducer);

export default cart;