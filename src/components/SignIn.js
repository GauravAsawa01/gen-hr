import React, { useState, useEffect } from "react";
import "../css/Main.css";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigation = useNavigate();
  const [intialState, setIntialState] = useState([]);
   const [checkEmail, setcheckEmail] = useState([]);
  const [user, setUser] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({});
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const getUserData = async () => {
    const response = await fetch("https://gorest.co.in/public/v2/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authToken: localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setIntialState(json);
    const email = intialState.map((data) => data.email);
    setcheckEmail(email);
   
  };

  useEffect(() => {
    getUserData();
     
  }, [user,setUser]);

  const handelSubmit = (e) => {
    e.preventDefault();
   
    if (formValidations()) {
      if (user.email === "admin@admin.com") {
        navigation("/admin");
      }
      else if(checkEmail.length>0){
         for (let i of checkEmail) {
          console.log(user.email);
         
             if (i  === user.email) {
               navigation("/user");
              
             } else {
               console.log("first");
             }
         }
      }
    }
  };

  const formValidations = () => {
    let Email = user.email;
    let error = {};
    let formisValid = true;

    if (!Email) {
      formisValid = false;
      error["Email"] = "Cannot be empty";
    } else if (typeof Email !== "undefined") {
      if (
        !Email.toString().match(
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ) {
        formisValid = false;
        error["Email"] = "Please Enter a valid Email";
      }
    }

    setErrors(error);
    return formisValid;
  };

  return (
    <>
      <div className="jumbo">
        <div className="card">
          <h6>Login</h6>
          <ul className="social">
            <li>
              <i className="fa fa-facebook"></i>
            </li>
            <li>
              <i className="fa fa-linkedin"></i>
            </li>
            <li>
              <i className="fa fa-google"></i>
            </li>
            <li>
              <i className="fa fa-instagram"></i>
            </li>
          </ul>
          <form>
            <small style={{ color: "red", fontWeight: 500 }}>
              {errors["Email"]}
            </small>
            <div className="input_text">
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={onChange}
                autoComplete="false"
                placeholder="Email"
              />

              <span htmlFor="email" className="form-label">
                Email
              </span>
            </div>

            <div className="submit_button mt-2 mb-3">
              <button type="submit" onClick={handelSubmit}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
