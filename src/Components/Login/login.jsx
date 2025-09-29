import "./login.css"

import { Link, useNavigate } from "react-router-dom";

import { useState } from 'react'

import axios from 'axios';


function Login({ setLoginModal }) {

    const [loginField, setLoginField] = useState({ "userName": "", "password": "" });

    function handleOnChangeInput(event, name) {
        setLoginField({
            ...loginField, [name]: event.target.value
        })
    }

    const navigate = useNavigate()


    const handleLoginFun = async () => {

        axios.post("http://localhost:3000/auth/login", loginField, { withCredentials: true }).then((res) => {
            console.log(res)
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("userId", res.data.user._id);
            localStorage.setItem("userProfilePic", res.data.user.profilePic);
            alert("data saved successfully")

            setTimeout(() => {
                navigate('/');
                window.location.reload();
            }, 2000);

        }).catch((err) => {
            console.log(err)

            alert("invalid credentials")
        })

    }

    return (
        <div className="login bg-black z-50">
            <div className="logincard ">
                <div className="titleCard_login">
                    <i class="fa-brands fa-youtube text-red-600 text-5xl"></i>
                    <span className="relative mt-2 text-lg left-1">Login</span>
                </div>
                <div className="logincredentials">

                    <div className="userNameLogin">

                        <input className="userNameLoginUserName" value={loginField.userName} onChange={(e) => handleOnChangeInput(e, "userName")} placeholder="UserName" type="text" />
                    </div>

                    <div className="userNameLogin">

                        <input className="userNameLoginUserName" value={loginField.password} onChange={(e) => handleOnChangeInput(e, "password")} placeholder="Password" type="password" />
                    </div>


                </div>

                <div className="login_buttons">
                    <div className="login-btn" onClick={handleLoginFun}>Login</div>
                    <Link to={'/signup'} className="login-btn" onClick={() => setLoginModal()}>Sign Up</Link>
                    <div className="login-btn" onClick={() => setLoginModal()}>Cancel</div>

                </div>


            </div>

        </div>
    )
}

export default Login;