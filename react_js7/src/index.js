import {addDay,removeDay,setGoal} from './actions/actions'
import storeFactory from './store'

const initialstate = (localStorage['redux-store'])?
                        JSON.parse(localStorage['redux-store']):
                        {}
const store = storeFactory(initialstate)

store.dispatch(addDay("Blueworld","2017-12-29"))
store.dispatch(addDay("Snowworld","2017-11-29"))

store.dispatch(removeDay("2017-12-29"))

store.dispatch(setGoal("9"))