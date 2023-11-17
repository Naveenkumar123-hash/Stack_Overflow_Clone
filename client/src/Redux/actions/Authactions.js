import * as api from "../../api"
import currentUser from "./currentUseraction"

export const signup = (authdata,navigate) => async (dispatch)=>{
    try{
      const {data} =await api.Signup(authdata)
      dispatch({type:'Auth',data})
      dispatch(currentUser(JSON.parse(localStorage.getItem("profile"))))
      navigate("/")
    }
    catch(error){
        console.log(error)
    }
}


export const login = (authdata,navigate) =>async(dispatch)=>{
  try{
    const {data} = await api.Login(authdata)
    dispatch({type:'Auth',data})
    dispatch(currentUser(JSON.parse(localStorage.getItem("profile"))))
    navigate("/")
  }
  catch(error){
      console.log(error)
  }
}
