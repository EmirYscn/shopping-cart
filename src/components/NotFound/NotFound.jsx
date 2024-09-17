import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import styles from "./NotFound.module.css";

function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return <h1>Not Found</h1>;
}

export default NotFound;
