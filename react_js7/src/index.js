import {randomGoals} from './actions/actions'
import storeFactory from './store'

const store = storeFactory({})

store.dispatch(randomGoals())
