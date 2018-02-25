import C from './constants'
import {allSkiDays} from './store/reducers'

const state = [{
        "resort":"Squaw Valley",
        "date":"2017-12-23",
        "powder":true,
        "backcountry":false
    },
    {
        "resort":"Kirkwood",
        "date":"2017-10-12",
        "powder":false,
        "backcountry": true
    }]
const action = {
    type:C.REMOVE_DAY,
    payload : "2017-12-23"
}
const nextState = allSkiDays(state,action)
console.log(`
 initial state:${JSON.stringify(state)}
 action:${JSON.stringify(action)}
 new state:${JSON.stringify(nextState)}
`)