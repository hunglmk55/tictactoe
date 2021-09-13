export const  setXO = function setXO(){
    return{
        type:  "SET_NEXT" 
    };
}



export const setStepNum = function setStepNum(text){
    return{
        type: "SET_STEP",
        stepNumber: text,
    };
}


export const getHistory = function getHistory(text){
    return{
        type: "GET_HISTORY",
        history: text,
    };
}

