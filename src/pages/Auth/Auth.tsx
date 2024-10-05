import { Navigate } from "react-router-dom";
import { UserDetails } from "../../store/user-slice";

type AuthProps = {
  user: UserDetails | null;
  children: React.ReactNode;
};

const Auth = ({ user, children }: AuthProps) => {
  const isAuth = !!user;

  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default Auth;
