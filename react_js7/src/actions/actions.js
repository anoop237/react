import C from '../constants'

export const addDay=(resort,date)=>{
    
    //add app logic here
    return {
        type: C.ADD_DAY,
        payload: {resort,date,powder:true,backcountry:false}
    }
}

export const removeDay=(date)=>{
    
    //add app logic here
    return {
        type: C.REMOVE_DAY,
        payload: date
    }
}


export const setGoal=(goal)=>{
    
    //add app logic here
    return {
        type: C.SET_GOAL,
        payload: goal
    }
}