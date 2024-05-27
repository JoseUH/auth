import { Navigate, useLocation } from "react-router-dom";
import { API } from "../services/api";
import { useEffect, useState } from "react";

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      API.get("users/checksession", token)
        .then((res) => {
          console.log(res);
          setIsAuthenticated(true);
        })
        .catch((err) => {
          console.log(err);
          setIsAuthenticated(false);
        });
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  if (isAuthenticated === null) {
    
    return null; 
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};