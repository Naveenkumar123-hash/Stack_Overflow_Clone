export const AuthReducers=(state={data:null},action)=>{
    switch(action.type){
        case 'Auth':
            localStorage.setItem("profile",JSON.stringify({...action?.data}))
            return state
        case "LOGOUT":
            localStorage.clear()
            return {...state,data:null}
        default:
            return state
    }
}