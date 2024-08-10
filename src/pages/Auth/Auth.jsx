/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const Auth = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default Auth;
