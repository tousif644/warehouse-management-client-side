import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "./../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleRegister = (event) => {
    const email = event.target.email.value;
    const pass = event.target.pass.value;
    createUserWithEmailAndPassword(email, pass);
  };

  return (
    <div>
          <h1 className="text-center text-danger my-3">Please Register</h1>
        <div className="container">
         <div className="row">
           <div className="col login-bg">
           <form onSubmit={handleRegister}>
            <div className="my-3 py-2">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="py-">
              <label for="password-text" className="form-label">
                Password
              </label>
              <input type="password" name="pass" className="form-control" />
            </div>
            <div>
              <input type="submit" value="Submit" className="btn btn-primary mb-3 my-2"/>
            </div>
          </form>
           </div>
         </div>
          
        </div>
        <p className="text-center my-2">Already have an account ? <Link to='/login'>Please Login</Link></p>
        <div className="d-flex align-items-center justify-content-center">
        <div style={{ height: "1px",width:"15%" }} className="bg-primary"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px",width:"15%" }} className="bg-primary"></div>
      </div>
        <SocialLogin></SocialLogin>
      </div>
  );
};

export default Register;
