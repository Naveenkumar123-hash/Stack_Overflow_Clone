import * as api from "../../api"

export const fetchAllUsers = () => async (dispatch) => {
  try {
    const { data } = await api.getallUsers();
    dispatch({ type: "FETCH_USERS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatedprofile=(id,updatedata)=>async(dispatch)=>{
  try{
  const {data}=await api.updateProfile(id,updatedata)
  dispatch({type:"UPDATED_VALUE",payload:data})
  }
  catch(error){
    console.log(error.message)
  }

}