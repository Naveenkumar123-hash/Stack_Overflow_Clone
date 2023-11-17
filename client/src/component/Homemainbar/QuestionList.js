import React from "react";
import Question from "./Question";
const QuestionList = ({questionsList}) => {
  return (
    <>
      {questionsList.map((question) => (
        <Question question={question} key={question.id}/>
      ))}
    </>
  );
};

export default QuestionList;
