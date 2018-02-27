import C from './constants'
import appReducer from './store/reducers'
import storeFactory from './store'
import {createStore} from 'redux'

const store = storeFactory({})

window.store = store

const unsubscribeGoalLogger = store.subscribe(()=>{
    console.log(`  Goal ${store.getState().goal}`);
})


store.dispatch({
    type:C.SET_GOAL,
    payload:2

});
store.dispatch({
    type:C.ADD_DAY,
    payload:{
        "resort":"Someresort",
        "date":"2017-12-29",
        "powder":true,
        "backcountry":false
    }
});

