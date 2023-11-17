import Logo from "../../../Assets/stack-overflow.svg";
import { useState } from "react";
import AboutAuth from "./AboutAuth";
import "./Auth.css";
import { signup,login } from "../../../Redux/actions/Authactions";
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"

const Auth = () => {
  const [issignup, setIssignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  const dispatch=useDispatch()

  const handleswitch = () => {
    setIssignup(!issignup);
  };
  
  const handlefn=(e)=>{
    e.preventDefault()
    if(issignup){
        if(!name){
          alert('Please fill the required details')
        }
        if(!email){
          alert('Please fill the required details')
        }
        if(!password){
          alert('Please fill the required details')
        }
      dispatch(signup({name,email,password},navigate))
    }
    else{
      dispatch(login({email,password},navigate))
    }
  }
  return (
    <section className="auth-section">
      {issignup && <AboutAuth />}
      <div className="auth-container-2">
        {!issignup && (
          <img
            src={Logo}
            alt="stack overflow"
            width={"50px"}
            height={"50px"}
            className="login-logo"
          />
        )}
        <form onSubmit={handlefn}>
          {issignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input type="text" id="name" name="name" onChange={(e)=>setName(e.target.value)}/>
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)} />
          </label>
          <label htmlFor="password">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#fbf3d5",
                height: "37px",
              }}
            >
              <h4>Password</h4>
              {!issignup && (
                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                  forgot password ?
                </p>
              )}
            </div>
            <input type="password" name="password" id="passwpord" onChange={(e)=>setPassword(e.target.value)} />
            {issignup && (
              <p style={{ color: "#666767", fontSize: "13px" }}>
                Password must contain at least eight
                <br /> characters,including at least 1letter and 1<br /> number.
              </p>
            )}
          </label>
          {issignup && (
            <label htmlFor="check">
              <input type="checkbox" id="check" />
              <p>
                Opt-in to receive occasional,
                <br /> product updates ,user research invitations,
                <br /> company announcements,and digests.
              </p>
            </label>
          )}
          <button type="submit" className="auth-btn">
            {issignup ? "Signup" : "Log in"}
          </button>
          {issignup && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              By clicking "Sign up", you agree to our
              <span style={{ color: " #007ac6" }}>
                terms of
                <br /> service
              </span>{" "}
              ,<span style={{ color: " #007ac6" }}>privacy policy</span> and
              <span style={{ color: " #007ac6" }}>cookie policy </span>
            </p>
          )}
        </form>
        <p>
          {issignup ? "Already have account?" : "Don't have an account?"}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleswitch}
          >
            {issignup ? "Log in" : "Sign up"}
          </button>
        </p>
      </div>
    </section>
  );
};
export default Auth;
