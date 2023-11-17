import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Homemainbar.css";
import QuestionList from "./QuestionList";
import { useSelector } from "react-redux";

const Homemainbar = () => {
  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();
  var questionsList=useSelector((state)=>state.AskQuestionReducer)

  // var questionsList = [
  //   {
  //     id: 1,
  //     votes: 3,
  //     noOfAnswer: 2,
  //     questionTitle: "What is a function",
  //     questionBody: "It meant to be",
  //     questionTags: ["java", "node js", "react js", "mongo"],
  //     userPosted: "mano",
  //     askedOn: "jan 1",
  //     userid:1
  //   },
  //   {
  //     id: 2,
  //     votes: 0,
  //     noOfAnswer: 0,
  //     questionTitle: "What is a JavaScript",
  //     questionBody: "It meant to be",
  //     questionTags: ["java", "node js", "react js", "mongo"],
  //     userPosted: "selva",
  //     askedOn: "jan 1",
  //     userid:2
  //   },
  //   {
  //     id: 3,
  //     votes: 1,
  //     noOfAnswer: 0,
  //     questionTitle: "What is a React",
  //     questionBody: "It meant to be",
  //     questionTags: ["java", "node js", "react js", "mongo"],
  //     userPosted: "kumar",
  //     askedOn: "jan 1",
  //     userid:3
  //   },
  // ];

  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  }
    return (
      <div className="main-bar">
        <div className="main-bar-header">
          {location.pathname === "/" ? (
            <h1>Top Question</h1>
          ) : (
            <h1>All Question</h1>
          )}
          <button onClick={checkAuth} className="ask-btn-">
            Ask Question
          </button>
        </div>
        <div>
          {questionsList.data=== null ? (
            <h1>Loading....</h1>
          ) : (
            <>
              <p>{questionsList.data.length}question</p>
              <QuestionList questionsList={questionsList.data} />
            </>
          )}{" "}
        </div>
      </div>
    );
};

export default Homemainbar;
