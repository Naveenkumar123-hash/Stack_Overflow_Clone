const currentUser=(data)=>{
    return{
        type:"CURRENT_USER",
        payload:data
    }
}

export default currentUser