import { useState } from "react";
import { Link } from "react-router-dom";
import { Scale, Mail, Lock } from "lucide-react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    alert(
      "Authentication will be connected to the backend later."
    );

  };


  return (

    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">
          <Scale size={28} />
        </div>

        <h1>Welcome back</h1>

        <p>
          Sign in to your LegalEase account.
        </p>


        <form onSubmit={handleSubmit}>

          <label>Email</label>

          <div className="input-wrapper">
            <Mail size={17} />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>


          <label>Password</label>

          <div className="input-wrapper">
            <Lock size={17} />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>


          <button className="btn btn-primary full-width">
            Sign In
          </button>

        </form>


        <div className="auth-divider">
          or
        </div>


        <Link
          to="/generator"
          className="btn btn-secondary full-width"
        >
          Continue as Guest
        </Link>

      </div>

    </div>

  );
}

export default Login;
