import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import productReducer from './reducers/productsreducer'
import userReducer from './reducers/userreducer'

const allReducer=combineReducers({products:productReducer,user:userReducer})
const store= createStore(
                allReducer,
                {
                    products:[{name:"iphone"}],
                    user:"Micheal"
                },
           window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
console.log(store)
ReactDOM.render(<Provider store={store}><App randomProps="random props"/></Provider>, document.getElementById('root'));
registerServiceWorker();
