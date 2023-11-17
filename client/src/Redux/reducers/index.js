import { AuthReducers } from "./AuthReducers"
import { combineReducers } from "redux"
import currentUserReducer from "./currentUserReducer"
import AskQuestionReducer from "../reducers/AskQuestionReducer.js"
import UserReducers from "./UserReducers.js"

export default combineReducers({
    AuthReducers,currentUserReducer,AskQuestionReducer,UserReducers
})
