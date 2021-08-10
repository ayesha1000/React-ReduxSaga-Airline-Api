
const initstate={
    isAuthenticated:true,
    airlines : [],
}

const reducer= (state= initstate, action) => {
    if(action.type === 'SET_AIRLINE') {
        return{  
            ...state,
            airlines : action.json                  
        }    
    }
    else if(action.type === 'SET_CHECK_DATA') {
        return{  
            ...state,
            isAuthenticated : action.value             
        } 
    }   
    return state;
}

export default reducer;