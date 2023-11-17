const AskQuestionReducer=(state={data:null},action)=>{
    switch(action.type){
        case "ASK_QUESTION":
            return {...state}
        case "FETCHED_QUESTIONS":
            return {...state,data:action.payload}
        case "Answer_Posted":
            return {...state}
        default:
            return state
    }
}

export default AskQuestionReducer
