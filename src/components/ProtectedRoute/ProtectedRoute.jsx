import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
//used to read payload of jwt token


const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/" replace />;

  try {
    //decode the token
    const decoded = jwtDecode(token);
    //if token is invalid go to catch block
    
    //get curr time in sec
    const now = Date.now() / 1000;

    if (decoded.exp && decoded.exp < now) {
      localStorage.removeItem("token");
      return <Navigate to="/" replace />;
    }

    return children;
  } catch (error) {
    localStorage.removeItem("token");
    return <Navigate to="/" replace />;
  }
};

export default ProtectedRoute;
