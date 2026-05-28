import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      navigate("/dashboard");

    } catch (error) {

      alert(error.response.data.message);

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500">

      <div className="bg-white/20 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-[350px] border border-white/30">

        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Welcome ✨
        </h1>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter Email"
            className="w-full p-3 rounded-xl mb-5 outline-none bg-white/70"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-3 rounded-xl mb-6 outline-none bg-white/70"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-black text-white p-3 rounded-xl hover:scale-105 transition duration-300"
          >
            Login
          </button>

        </form>

      </div>

    </div>

  );

}

export default Login;