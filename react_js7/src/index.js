import C from './constants'
import {allSkiDays,goal} from './initialstate.json'

console.log(`
ski day counter
===============
The goal is ${goal} days
Initially there are ${allSkiDays.length} days in list

Constants(actions)
-----------------
${Object.keys(C).join('\n')}

`)