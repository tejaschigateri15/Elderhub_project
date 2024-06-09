import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'


const counter = createSlice({
    name: 'counter',
    initialState: { counter: 1 ,decounter:-1,email:"" },
    reducers: {
        increment(state) {
            state.counter += 1;
        },
        decrement(state) { // Define the decrement action
            state.counter--;
        },
        add(state,action) { // Define the add action
            state.counter += action.payload;
        },
        decrement2(state) { // Define the decrement action
            state.decounter--;
        },
        setEmail(state,action){
            state.email = action.payload;
        }
    },
});


const persistconfig = {
    key : "root",
    storage,
    version : 1
}


const reducer = combineReducers({
    user_info : counter.reducer
})

const persistedreducer = persistReducer(persistconfig,reducer)

export const action = counter.actions;


const store = configureStore({
    reducer: persistedreducer
})

export default store;
