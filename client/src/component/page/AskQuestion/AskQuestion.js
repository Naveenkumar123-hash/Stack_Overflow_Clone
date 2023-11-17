import React, { useState } from "react";
import "./AskQuestion.css";
import AskQuestionaction from "../../../Redux/actions/AskQuestionaction";
import {useDispatch,useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"

const AskQuestion = () => {
  const user=useSelector((state)=>state.currentUserReducer)
   const dispatch=useDispatch()
   const navigate=useNavigate()

  const [questionTitle,setQuestionTitle]=useState("")
  const [questionBody,setQuestionBody]=useState("")
  const [questionTags,setQuestionTags]=useState("")
 
  const handlefn=(e)=>{
     e.preventDefault();
     dispatch(AskQuestionaction({questionTitle,questionBody,questionTags,userPosted:user.result.name,userId:user?.result._id},navigate))
  } 

  return (
    <div className="ask-question">
      <div className="ask-ques-container">
        <h2>Ask a public Questions</h2>
        <form onSubmit={handlefn}>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>
                Be specific and imagine you're asking a question to another
                person.
              </p>
              <input
                type="text"
                id="ask-ques-title"
                placeholder="eg. Is there an R function for finding the index of an element in a vector?"
                onChange={(e)=>setQuestionTitle(e.target.value)}
              ></input>
            </label>
            <label htmlFor="ask-ques-body">
              <h4>Body</h4>
              <p>What are the details of your problem?</p>
              <textarea
                name=""
                id="ask-ques-body"
                cols="30"
                rows="8"
                onChange={(e)=>setQuestionBody(e.target.value)}
              ></textarea>
            </label>
            <label htmlFor="ask-ques-tags">
              <h4>Tags</h4>
              <p>
                Add up to 5 tags to describe what your question is about. Start
                typing to see suggestions
              </p>
              <input type="text" id="ask-ques-tags" onChange={(e)=>setQuestionTags(e.target.value.split(" "))}></input>
            </label>
          </div>
          <input
            type="submit"
            className="review-btn"
            value="Review your question"
          />
        </form>
      </div>
    </div>
  );
};
export default AskQuestion;
