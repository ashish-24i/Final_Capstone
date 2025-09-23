import "./login.css"

import { Link } from "react-router-dom";


function Login({ setLoginModal }) {
    return (
        <div className="login bg-black z-50">
            <div className="logincard ">
                <div className="titleCard_login">
                    <i class="fa-brands fa-youtube text-red-600 text-5xl"></i>
                    <span className="relative mt-2 text-lg left-1">Login</span>
                </div>
                <div className="logincredentials">

                    <div className="userNameLogin">

                        <input className="userNameLoginUserName" placeholder="UserName" type="text" />
                    </div>

                    <div className="userNameLogin">

                        <input className="userNameLoginUserName" placeholder="Password" type="password" />
                    </div>


                </div>

                <div className="login_buttons">
                    <div className="login-btn">Login</div>
                    <Link to={'/signup'} className="login-btn" onClick={() => setLoginModal()}>Sign Up</Link>
                    <div className="login-btn" onClick={() => setLoginModal()}>Cancel</div>

                </div>


            </div>

        </div>
    )
}

export default Login;