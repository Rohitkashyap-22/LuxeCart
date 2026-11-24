import "./Auth.css"
import { Link } from "react-router-dom";

const Auth = ({isLogin}) => {

  return (
    <div className="auth">
      {isLogin ?
        <div className="heading">
          <h2>Welcome Back</h2>
          <p>Login to your LuxeCart account</p>
        </div>
        :
        <div className="heading">
          <h2>Create Account</h2>
          <p>Create your LuxeCart account</p>
        </div>
      }
      
      <div className="toggletab">
        <Link className={isLogin ? "active":""} to="/login">Login</Link>
        <Link className={!isLogin ? "active":""} to="/register">Register</Link>
      </div>

      {isLogin ?
        <form className="auth-form">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Enter your email"/>
          
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Enter your password"/>

          {/* if admin redirect to  /admin ---- this fxnality is remaining */}
          <button type="submit">Login</button>
        </form>
        :
        <form className="auth-form">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" name="fullname" id="fullname" placeholder="Enter your name"/>
          
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Enter your email"/>

          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Enter your password"/>

          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm your password"/>

          <button type="submit">Register</button>
        </form>
      }  
    </div>
  );
};

export default Auth;


