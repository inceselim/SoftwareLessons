

import { createStore } from 'redux';
import { combineReducers } from 'redux';

const initialState = {
    counter: 10,
    dark: false,
}


const darkmodeReducers = (state, action) => {
    switch (action.type) {
        case 'DARKMODE_ON':
            return { ...state, darkMode: !state.dark };
        default:
            return !state;
    }
};
const counterReducers = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1, dark: !state.dark };
        case 'DECREMENT':
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }
};

// const rootReducer = combineReducers ({
//    orderStatusReducer: OrderStatusReducer,
//    getWishlistDataReducer: GetWishlistDataReducer
// });


const store = createStore(counterReducers, initialState);

console.log("INITIAL_STATE.counter: ", initialState.counter)
console.log("INITIAL_STATE.dark: ", initialState.dark)

export default store;