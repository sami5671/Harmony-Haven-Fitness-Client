import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // destructure the authcontext
  const { user } = useContext(AuthContext);

  //   for getting the location where user have clicked or want to navigate
  const location = useLocation();
  //   console.log(location.pathname);

  //   check the user is logged in or not(if logged in then it will permission to go on the destination route)
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRoute;
