/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

type auth = {
  user?: any;
  children?: any;
};

const Auth = ({ user, children }: auth) => {
  const isAuth = !!user;

  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default Auth;
