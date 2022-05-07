import React from "react";
import auth from "./../../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import google from "../../../icons/google.png";
import { useNavigate } from 'react-router-dom';
import Loading from "../Loading/Loading";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  if(loading) {
      return <Loading></Loading>
  }
    if(user) {
        navigate('/');
    }
    if(error) {
        alert(error);
    }
  return (
    <div>
      <button className="btn btn-outline-dark  d-block mx-auto" onClick={() => signInWithGoogle()}>
        <img
          src={google}
          alt=""
          className="img-fluid"
          style={{ width: "30px" }}
        />{" "}
        Sign in with Google
      </button>
    </div>
  );
};

export default SocialLogin;
