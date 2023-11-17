import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../component/page/Auth/Auth";
import Question from "../component/page/Question/Question";
import AskQuestion from "../component/page/AskQuestion/AskQuestion";
import Home from "../component/page/Home/Home";
import DisplayQuestion from "./page/Question/DisplayQuestion";
import Tags from "../component/page/Tags/Tags"
import Users from "../component/page/Users/Users"
import UserProfile from "../component/page/UserProfile/UserProfile"

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/Question" element={<Question />} />
        <Route path="/AskQuestion" element={<AskQuestion />} />
        <Route path="Question/:id" element={<DisplayQuestion/>}/>
        <Route path="/Tags" element={<Tags/>}></Route>
        <Route path="/Users" element={<Users/>}></Route>
        <Route path="Users/:id" element={<UserProfile/>}></Route>
      </Routes>
    </>
  );
};
export default AllRoutes;
