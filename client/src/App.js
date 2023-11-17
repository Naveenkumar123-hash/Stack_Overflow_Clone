import AllRoutes from "../src/component/AllRoutes"
import Navbar from "./component/Navbar/Navbar.js";
import { BrowserRouter } from 'react-router-dom';
import { fetchquestions } from "./Redux/actions/AskQuestionaction.js";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {fetchAllUsers} from "../src/Redux/actions/Useractions.js"

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(fetchquestions())
      dispatch(fetchAllUsers())
  },[dispatch])
  return (
    <div className="App"> 
    <BrowserRouter>
     <Navbar/>
     <AllRoutes/>
     </BrowserRouter>
     </div>
  );
}

export default App;