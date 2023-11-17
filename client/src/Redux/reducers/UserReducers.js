const UserReducers = (state = [], action) => {
    switch (action.type) {
      case "FETCH_USERS":
        return action.payload;
      case "UPDATED_VALUE":
        return state.map((states)=>states._id===action.payload._id?action.payload:state)
      default:
        return state;
    }
  };

  export default UserReducers