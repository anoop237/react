import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers} from 'redux'


function productReducer(state=[],action){   
    return state
}
function userReducer(state='',action){
    console.log(action)
    if(action.type==='updateUser')
        return action.payload.user
    return state
}
const allReducer=combineReducers({products:productReducer,user:userReducer})
const store= createStore(
                allReducer,
                {
                    products:[{name:"iphone"}],
                    user:"Micheal"
                },
           window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
console.log(store.getState())

const updateUserAction = {
    type : "updateUser",
    payload : {user : "Anoop"}
}
store.dispatch(updateUserAction)

console.log(store.getState())

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
