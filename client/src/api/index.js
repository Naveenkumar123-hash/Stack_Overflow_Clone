import axios from "axios";

const API=axios.create({baseURL:'https://github-repositorie.onrender.com'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
})
export const Signup=(authdata)=>API.post("/user/signup",authdata)
export const Login=(authdata)=>API.post("/user/login",authdata)

export const postquestion=(questiondata)=>API.post("/question/ask",questiondata)
export const fetchallquestion=()=>API.get("/question/get")
export const AnswerVote=(id,value,userId)=>(API.patch(`/question/vote/${id}`,{value,userId}))
export const deleteQuestion=(id)=>(API.delete(`/question/delete/${id}`))
export const deleteanswer=(id,answerId,noOfAnswers)=>(API.patch(`/answer/delete/${id}`,{answerId,noOfAnswers}))
export const getallUsers=()=>(API.get("/user/getAllUsers"))

export const updateProfile=(id,updatedata)=>API.patch(`/user/update/${id}`,updatedata)
export const PostAnswers=(id,noOfAnswers,answerBody,userAnswered,userId)=>API.patch(`/answer/post/${id}`,{noOfAnswers,answerBody,userAnswered,userId})