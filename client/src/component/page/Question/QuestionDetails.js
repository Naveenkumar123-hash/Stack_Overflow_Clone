import { Link, useParams } from "react-router-dom";
import down from "../../../Assets/circle-down-regular.svg";
import up from "../../../Assets/circle-up-regular.svg";
import "./Question.css";
import Avathar from "../../Avathar/Avathar";
import DisplayAnswer from "./DisplayAnswer";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { Postanswer } from "../../../Redux/actions/AskQuestionaction";
import { useNavigate,useLocation } from "react-router-dom";
import moment from "moment"
import copy from "copy-to-clipboard"
import { deleteQuestions,AnswerVotes } from "../../../Redux/actions/AskQuestionaction";

const QuestionDetails = () => {
  let questionsList = useSelector((state) => state.AskQuestionReducer);
  const navigate=useNavigate()
  // var questionsList = [
  //     {
  //       id: 1,
  //       upvotes:3,
  //       downvotes: 1,
  //       noOfAnswer: 2,
  //       questionTitle: "What is a function",
  //       questionBody: "It meant to be",
  //       questionTags: ["java", "node js", "react js", "mongo"],
  //       userPosted: "mano",
  //       askedOn: "jan 1",
  //       userid:1,
  //       answer:[{
  //         answerBody:"Answer",
  //         userAnswered:"selva",
  //         answeredOn:"Jan 2",
  //         userId:2
  //       }]
  //     },
  //     {
  //       id: 2,
  //       upvotes:5,
  //       downvotes: 2,
  //       noOfAnswer: 0,
  //       questionTitle: "What is a JavaScript",
  //       questionBody: "It meant to be",
  //       questionTags: ["java", "node js", "react js", "mongo"],
  //       userPosted: "selva",
  //       askedOn: "jan 2",
  //       userid:2,
  //       answer:[{
  //         answerBody:"Answer",
  //         userAnswered:"kumar",
  //         answeredOn:"Jan 3",
  //         userId:3
  //       }]
  //     },
  //     {
  //       id: 3,
  //       upvotes:1,
  //       downvotes: 1,
  //       noOfAnswer: 0,
  //       questionTitle: "What is a React",
  //       questionBody: "It meant to be",
  //       questionTags: ["java", "node js", "react js", "mongo"],
  //       userPosted: "kumar",
  //       askedOn: "jan 4",
  //       userid:3,
  //       answer:[{
  //         answerBody:"Answer",
  //         userAnswered:"karthick",
  //         answeredOn:"Jan 4",
  //         userId:4
  //       }]
  //     },
  //   ];
  const { id } = useParams();
  const [answer,setAnswer]=useState("")
  const dispatch=useDispatch()
  const location=useLocation()
  let user=useSelector(state=>state.currentUserReducer)
  const Url="http://localhost:3000";

  const handleupVote=()=>{
    dispatch(AnswerVotes(id,"upVote",user.result._id))
  }

  const handledownVote=()=>{
    dispatch(AnswerVotes(id,"downVote",user.result._id))
  }

  const handlefn=(e,answerlength)=>{
    e.preventDefault()
    if(user===null){
      alert("please login or signup to ask question")
      navigate("/Auth")
    }
    else{
      if(answer!==""){
        dispatch(Postanswer({id,noOfAnswers:answerlength+1,answerBody:answer,userAnswered:user.result.name,userId:user.result._id}))
        setAnswer("")
      }
      else{
        alert("Answer body should not be empty")
      }
    }
  }
  const handleshare=()=>{
     copy(Url+location.pathname)
     alert('copies url'+Url+location.pathname)
  }

  const handledelete=()=>{
      dispatch(deleteQuestions(id,navigate))
  }
  return (
    <div className="question-details-page">
      {questionsList.data === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionsList.data
            .filter(question => question._id === id)
            .map((question) => (
              <div key={question._id}>
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img
                        src={up}
                        width="25px"
                        height="25px"
                        alt="positive"
                        className="votes-icon"
                        onClick={handleupVote}
                      />
                      <p>{question.upVote.length - question.downVote.length}</p>
                      <img
                        src={down}
                        width="25px"
                        height="25px"
                        alt="negative"
                        className="votes-icon"
                        onClick={handledownVote}
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="qustion-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-action-user">
                        <div>
                          <button type="button" onClick={handleshare}>Share</button>
                          {
                            user?.result?._id===question.userId && 
                             <button type="button" onClick={handledelete}>Delete</button>
                             }
                        </div>
                        <div>
                          <p>asked {moment(question.askedOn).fromNow()}</p>
                          <Link
                            to={`/User/${question.userid}`}
                            className="user-link"
                            style={{ color: "0086d8" }}
                          >
                            <Avathar backgroundColor="orange" px="8px" py="5px">
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avathar>
                            <div>{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} Answer</h3>
                    <DisplayAnswer question={question} handleshare={handleshare}/>
                  </section>
                )}
                <section className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form onSubmit={(e)=>handlefn(e,question.answer.length)}>
                    <textarea name="" cols="30" value={answer}rows="10"onChange={(e)=>setAnswer(e.target.value)}></textarea>
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                    />
                  </form>
                  <p>
                    Browse Other Question tagged
                    {question.questionTags.map((tag) => (
                      <Link to={"/Tags"} className="ans-tags">
                        {tag}
                      </Link>
                    ))}{" "}
                    or
                    <Link
                      to={"/AskQuestion"}
                      style={{ textDecoration: "none", color: "#009dff" }}
                    >
                      Ask your own question
                    </Link>
                  </p>
                </section>
              </div>
            ))}
        </>
      )}
    </div>
  );
};
//

export default QuestionDetails;
