import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginPrompt() {
  let navigate = useNavigate();
  useEffect(() => {
    onLoad();
  }, []);
  function onLoad() {
    navigate("/login");
  }
}

export default LoginPrompt;
