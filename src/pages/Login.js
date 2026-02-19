import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login({ setIsLoggedIn }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    if (user === "admin123" && pass === "Admin123") {
      setIsLoggedIn(true);
      navigate("/products");
    } else {
      setErr("Invalid username or password");
    }
  };
  return (
    <form onSubmit={submit}>
      <div className="flex justify-center items-center h-screen">
  <div className="bg-[rgb(236,5,36)] w-[300px] p-[25px] rounded-[20px] 
            flex flex-col justify-center items-center 
            shadow-[0px_4px_12px_rgba(0,0,0,0.2)] 
            font-sans font-bold text-white">
        <h1>Login</h1>
        <label>Username: </label>
      <input placeholder="Username" onChange={(e) => setUser(e.target.value)} /><br/><br/>
      <label>Password: </label>
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPass(e.target.value)}
      /><br/><br/>
      <button>Login</button>
      {err}
      </div>
      </div>
    </form>
  );
}
export default Login;