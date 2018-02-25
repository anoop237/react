import C from './constants'
import appReducer from './store/reducers'
import initialState from './initialstate.json'

let state = initialState

console.log(`
Initial State
====================
goal: ${state.goal}
resorts: ${JSON.stringify(state.allSkiDays)}
fetching: ${state.resortNames.fetching}
suggestions:${state.resortNames.suggestions}
`)


state = appReducer(state,{
    type:C.SET_GOAL,
    payload:15
})

state = appReducer(state,{
    type:C.ADD_DAY,
    payload:{
        "resort": "Squarebird",
        "date": "2017-11-13",
        "powder": false,
        "backcountry": true
    }
})

state = appReducer(state,{
    type:C.CHANGE_SUGGESTIONS,
    payload:["Resort1","Resort2"]
})

console.log(`
Next State
====================
goal: ${state.goal}
resorts: ${JSON.stringify(state.allSkiDays)}
fetching: ${state.resortNames.fetching}
suggestions:${state.resortNames.suggestions}
`)
