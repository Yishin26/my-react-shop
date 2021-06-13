import React from "react";
import "../style/Login.scss";
import { Link } from "react-router-dom";
class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="login-card">
          <div className="input-field">
            <label className="label">Email：</label>
            <input type="text" placeholder="Email" />
          </div>
          <div className="input-field">
            <label className="password">Password：</label>
            <input type="password" placeholder="Password" />
          </div>
          <Link to="/">
            <div className="login-btn">登入 </div>
          </Link>
        </div>
      </div>
    );
  }
}
export default Login;
