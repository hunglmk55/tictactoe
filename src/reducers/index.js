function reducer(state,action){
    switch(action.type){
        case "SET_NEXT" :
            console.log("CASE SET_NEXT");
            return{
                ...state,
                xIsNext: !state.xIsNext 
            };
        
        case "SET_STEP" :
            console.log("CASE SET_STEP");
            return{
                ...state,
                stepNumber: action.stepNumber
            };
        
        case "GET_HISTORY" :
            return{
                ...state,
                history: action.history
            };
        default :
        return state;
    }
}

export default reducer;