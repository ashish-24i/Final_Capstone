import { useState, useEffect } from "react";
import "./navBar.css"

import { Link, useNavigate } from "react-router-dom";
import Login from "../Login/login";
import axios from "axios";

function NAvBar({ setSideNavBarFunc, sideNavBar }) {
   const [navBarModel, setNavBArModel] = useState(false);

   const [login, setLogin] = useState(false);

   const [isLoggedIn, setIsLoggedIn] = useState(false);


   const [userPic, setUserPic] = useState("data:image/jpeg;base64,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");

   function handleCLickModel() {
      setNavBArModel(!navBarModel)
   }

   function sideNavBarFunc() {
      setSideNavBarFunc(!sideNavBar)
   }


   const navigate = useNavigate()

   function handleProfile() {

      let userId = localStorage.getItem("userId")
      navigate(`/user/${userId}`)

      setNavBArModel(false)
   }

   function setLoginModal() {
      setLogin(false);
   }

   function onclickOfPopUpOption(button) {
      setNavBArModel(false)

      if (button == "login") {
         setLogin(true);
      }
      else {


         localStorage.clear();

         getLogoutFun();

         setTimeout(() => {
            navigate('/');
            window.location.reload();
         }, 2000);



      }
   }


   const getLogoutFun = async () => {
      axios.post("http://localhost:3000/auth/logout", {}, { withCredentials: true }).then((res) => {

         console.log("Logout")
      }).then((err) => {
         console.log(err)
      })


   }


   useEffect(() => {
      let userProfilePic = localStorage.getItem("userProfilePic");

      setIsLoggedIn(localStorage.getItem("userId") !== null ? true : false);

      if (userProfilePic != null) {
         setUserPic(userProfilePic);
      }

   }, [])


   return (
      <>

         <div className="navBar bg-black h-20 flex justify-between">

            <div className="navBar-left flex">

               <div className="p-6  text-3xl" >
                  <i onClick={sideNavBarFunc} className="fas fa-bars text-white " ></i>
               </div>

               <Link to={"/"} className="flex items-center gap-2">
                  <i className="fab fa-youtube text-red-600 text-5xl"></i>
                  <span className="text-2xl font-bold text-white">YouTube <sup className="text-gray-300 font-thin" >IN</sup></span>
               </Link>

            </div>

            <div className="navBar-middle ">


               <input type="text" className="w-[300%] mt-4 rounded-lg  h-10 relative right-96" placeholder="search..." />

               <i className="fas fa-search text-gray-600  relative bottom-9 left-60"></i>

               <i className="fas fa-microphone text-gray-400 relative bottom-9  left-72"></i>


            </div>


            <div className="navBar-right  mt-4  relative right-20 ">

               <Link to={`/${localStorage.getItem("userId")}/upload`}>
                  <i class="fas fa-plus text-white"></i>
                  <span className="text-white">   Create</span>
               </Link>

               <i class="fas fa-bell text-white  pl-10 ml-16 relative bottom-5"></i>

               <img src={userPic} alt="alternate" className="w-[50px] h-[50px] ml-40 relative bottom-9 rounded-[50%]" onClick={handleCLickModel} />

               {/** * <i onClick={handleCLickModel} class="fas fa-user-circle text-white  ml-20"></i>*/}

               {navBarModel &&
                  <div className="navbar-model">

                     {isLoggedIn && <div className="navbar-model-option text-white" onClick={handleProfile}>Profile</div>}
                     {isLoggedIn && <div className="navbar-model-option text-white" onClick={() => onclickOfPopUpOption("logout")}>Log Out</div>}
                     {!isLoggedIn && <div className="navbar-model-option text-white " onClick={() => onclickOfPopUpOption("login")}>Login</div>}
                  </div>}

            </div>

            {
               login && <Login setLoginModal={setLoginModal} />
            }

         </div>



      </>
   )
}

export default NAvBar;