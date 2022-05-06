import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./Login.css";
import auth from "./../../firebase.init";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  const location = useLocation();
  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const navigateRegister = () => {
    navigate("/register");
  };
  //   let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
    //   (from, { replace: true });
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    // getting email and pass value
    const email = emailRef.current.value;
    const pass = passRef.current.value;

    signInWithEmailAndPassword(email, pass);
  };

  return (
    <div>
      <h1 className="text-center text-danger my-3">Please Login</h1>
    <div className="container w-75 my-2">
      <div className="row">
        <div className="col login-bg w-50">
          <Form className="my-4" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                ref={emailRef}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={passRef}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mb-3">
              Submit
            </Button>
          </Form>
        </div>
      </div>

      
      
    </div>
    <p className="text-center my-2">
        New to Far's Warehouse ?{" "}
        <Link to="/register" onClick={navigateRegister}>
          Please Register
        </Link>{" "}
      </p>
      
    <div className="d-flex align-items-center justify-content-center">
        <div
          style={{ height: "1px", width: "15%" }}
          className="bg-primary"
        ></div>
        <p className="mt-2 px-2">or</p>
        <div
          style={{ height: "1px", width: "15%" }}
          className="bg-primary"
        ></div>
      </div>
    <SocialLogin></SocialLogin>
    </div>
    
  );
};

export default Login;
