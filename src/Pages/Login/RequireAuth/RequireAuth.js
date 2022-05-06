import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../Loading/Loading";
import auth from "./../../../firebase.init";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
}
  return children;
};

export default RequireAuth;
