import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import Loading from "../Loading/Loading";
import auth from "./../../../firebase.init";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }
  if (sending) {
    return <Loading></Loading>;
  }
  
if(error) {
  alert('something wrong')
}
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div>
        <h1 className="text-center">Your Email is not verified</h1>
        <div className="container">
          <div>
            <h4>Please verify your email address</h4>
          </div>

          <div>
            <button
              onClick={async () => {
                await sendEmailVerification();
                toast("Verification email sent");
              }}
            >
              Send verification email
            </button>
          </div>
        </div>
      </div>
    );
  }
  return children;
};

export default RequireAuth;
