import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../src/Assets/logo.jpg";
import search from "../../../src/Assets/find.png";
import Avathar from "../Avathar/Avathar"
import {useDispatch,useSelector} from "react-redux"
import "./Navbar.css";
import currentUser from "../../Redux/actions/currentUseraction";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const Navbar = () => {
   const dispatch=useDispatch();
   const User=useSelector((state)=>state.currentUserReducer)
   const navigate=useNavigate()

  useEffect(()=>{
    const token=User?.token
    if(token){
      const decodedToken = jwtDecode(token);
      if(decodedToken.exp*1000 < new Date().getTime()){
        handlelogout()
      }
    }
    dispatch(currentUser(JSON.parse(localStorage.getItem("profile"))))
  },[dispatch])

  const handlelogout=()=>{
    dispatch({type:"LOGOUT"})
    navigate("/")
    dispatch(currentUser(null))
  }

  return (
      <div className="main-nav">
        <div className="navbar">
          <>
            <Link to="/" className="nav-item nav-logo">
              <img src={Logo} width="100px" height="68px"alt="logo" />
            </Link>
            <Link to="/" className="nav-item nav-btn">
              About{" "}
            </Link>
            <Link to="/" className="nav-item nav-btn">
              Product{" "}
            </Link>
            <Link to="/" className="nav-item nav-btn">
              For Terms
            </Link>
            <form>
              <input type="text" placeholder="search..." />
              <img
                src={search}
                alt="search"
                width="18"
                className="search-icon"
              />
            </form>

            {User === null ? (
              <Link to="/Auth" className="nav-item nav-links">
                Log in
              </Link>
            ) : (
              <>
                <Avathar
                  backgroundColor="#009dff"
                  px="10px"
                  py="7px"
                  borderRadius="50%"
                  color="white"
                >
                  <Link
                    to={`Users/${User.result._id}`}
                    style={{ color: "white", textDecoration: "none" }}
                  >   
                  {User.result.name.charAt(0).toUpperCase()}</Link>
                </Avathar>
                <button className="nav-item nav-links btn" onClick={handlelogout}>Log out</button>
              </>
            )}
          </>
        </div>
      </div>
  );
};
export default Navbar;
