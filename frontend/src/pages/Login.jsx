import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Login page</h1>
      <button onClick={()=>navigate("/admin")}>Login</button>
      <button onClick={()=>navigate(-1)}>Go Back</button>
    </>
  );
};

export default Login;
