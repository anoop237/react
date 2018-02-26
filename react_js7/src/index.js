import C from './constants'
import appReducer from './store/reducers'
import initialState from './initialstate.json'
import {createStore} from 'redux'
const store = createStore(appReducer,initialState)

console.log('Initial state',store.getState());

store.dispatch({
    type:C.ADD_DAY,
    payload:{
            "resort": "Kirkwood Resort",
            "date": "2017-02-20",
            "powder": true,
            "backcountry": false
        }
});

console.log('Next state',store.getState());
