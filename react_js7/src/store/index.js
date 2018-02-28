import C from '../constants'
import appReducer from './reducers'
import thunk from 'redux-thunk'
import {createStore,applyMiddleware} from 'redux'

const consoleMessages = store => next => action=> {
    let result
    console.groupCollapsed(`dispatching action => ${action.type}`)
    console.log('skidays',store.getState().allSkiDays.length)
    result = next(action)
    console.log(`initial state ${JSON.stringify(store.getState())}`)
    console.groupEnd()
    return result
}

export default (initialState={})=>{
    return applyMiddleware(thunk,consoleMessages)(createStore)(appReducer,initialState)
}
