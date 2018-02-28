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
export const addError=(error)=>{
    
    //add app logic here
    return {
        type: C.ADD_ERROR,
        payload: error
    }
}
export const clearError=(index)=>{
    
    //add app logic here
    return {
        type: C.CLEAR_ERROR,
        payload: index
    }
}

export const changeSuggestions=(suggestions)=>{
    
    //add app logic here
    return {
        type: C.CHANGE_SUGGESTIONS,
        payload: suggestions
    }
}

export const clearSuggestions=(suggestions)=>{
    
    //add app logic here
    return {
        type: C.CLEAR_SUGGESTIONS,
        payload: suggestions
    }
}

export const randomGoals = ()=>(dispatch,getState)=>{
    if(!getState().resortNames.fetching){
        dispatch({
            type: C.FETCH_RESORT_NAMES

        })
        setTimeout(()=>{
            dispatch({
                type:C.CANCEL_FETCHING
           })
        },1500)
    }
   
}