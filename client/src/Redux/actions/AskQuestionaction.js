import * as api from "../../api"

const AskQuestionaction=(questiondata,navigate)=>async(dispatch)=>{
    try{
        const {data}=await api.postquestion(questiondata)
        dispatch({type:"ASK_QUESTION",payload:data})
        dispatch(fetchquestions())
        navigate("/")
    }
    catch(error){
         console.log(error)
    }
}

export const fetchquestions=()=>async(dispatch)=>{
    try{
        const {data}=await api.fetchallquestion();
        dispatch({type:"FETCHED_QUESTIONS",payload:data})
    }
    catch(error){
        console.log(error)
    }
}

export const Postanswer=(values)=>async(dispatch)=>{
    try{
     const {id,noOfAnswers,answerBody,userAnswered,userId}=values;
     const {data}=await api.PostAnswers(id,noOfAnswers,answerBody,userAnswered,userId)
     dispatch({type:"Answer_Posted",payload:data})
     dispatch(fetchquestions())
    }
    catch(error){
        console.log(error)
    }
}

export const deleteQuestions=(id,navigate)=>async(dispatch)=>{
    try{
     const {data}=await api.deleteQuestion(id)
     dispatch(fetchquestions())
     navigate("/")
    }
    catch(error){
      console.log(error.message)
    }
}

export const AnswerVotes=(id,value,userId)=>async(dispatch)=>{
    try{
    const {data}=await api.AnswerVote(id,value,userId)
    dispatch(fetchquestions())
    }
    catch(error){
        console.log(error.message)
    }
}

export const deleteAnswer=(id,answerId,noOfAnswers)=>async(dispatch)=>{
    try{
        const {data}=await api.deleteanswer(id,answerId,noOfAnswers)
        dispatch(fetchquestions())
    }
    catch(error){
        console.log(error)
    }
}

export default AskQuestionaction