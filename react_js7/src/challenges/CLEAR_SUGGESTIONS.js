
import C from '../constants'
import expect from 'expect'
import {suggestions} from '../store/reducers'

const action={
    type:C.CLEAR_SUGGESTIONS,
}
const state = ["Squaw Valley","Snowbird","Stowe","Steamboat"]
const expectedState = []
const actualState = suggestions(state,action)

expect(actualState).toEqual(expectedState)

console.log(`
    Challenge C : CLEAR_SUGGESTIONS Passed!!!
`)