import { Link } from "react-router-dom";
import Avathar from "../../Avathar/Avathar";
import moment from "moment";
import { useSelector,useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteAnswer } from "../../../Redux/actions/AskQuestionaction";

const DisplayAnswer = ({ question, handleshare }) => {
  let user=useSelector(state=>state.currentUserReducer)
  let {id}=useParams()
  const dispatch=useDispatch()
 
  const handledelete=(answerId,noOfAnswers)=>{
    dispatch(deleteAnswer(id,answerId,noOfAnswers-1))
  }
  return (
    <div>
      {question &&
        question.answer.map((ans) => (
          <div className="display-ans" key={ans._id}>
            <p>{ans.answerBody}</p>
            <div className="question-actions-user">
              <div>
                <button type="button" onClick={handleshare}>
                  Share
                </button>
                {user?.result?._id === ans.userId && (
                  <button type="button" onClick={()=>handledelete(ans._id,question.noOfAnswers)}>
                    Delete
                  </button>
                )}
              </div>
              <div>
                <p>answeredOn {moment(ans.answeredOn).fromNow()}</p>
                <Link
                  to={`/User/${question.userid}`}
                  className="user-link"
                  style={{ color: "0086d8" }}
                >
                  <Avathar backgroundColor="green" px="8px" py="5px">
                    {ans.userAnswered.charAt(0).toUpperCase()}
                  </Avathar>
                  <div>{ans.userAnswered}</div>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default DisplayAnswer;
