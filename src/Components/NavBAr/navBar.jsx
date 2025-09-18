import "./navBar.css"

function NAvBar() {
   return (
      <>

         <div className="navBar bg-black h-20 flex justify-between">

            <div className="navBar-left flex">

               <div className="p-6  text-3xl">
                  <i className="fas fa-bars text-white "></i>
               </div>

               <div className="flex items-center gap-2">
                  <i className="fab fa-youtube text-red-600 text-5xl"></i>
                  <span className="text-2xl font-bold text-white">YouTube <sup className="text-gray-300 font-thin" >IN</sup></span>
               </div>

            </div>

            <div className="navBar-middle ">


               <input type="text" className="w-[300%] mt-4 rounded-lg  h-10 relative right-96" placeholder="search..." />

               <i className="fas fa-search text-gray-600  relative bottom-9 left-60"></i>

               <i className="fas fa-microphone text-gray-400 relative bottom-9  left-72"></i>


            </div>


            <div className="navBar-right  mt-4  relative right-20 ">

               <i class="fas fa-plus text-white"></i>
               <span className="text-white">   Create</span>

               <i class="fas fa-bell text-white  pl-10"></i>

               <i class="fas fa-user-circle text-white  ml-20"></i>

            </div>

         </div>



      </>
   )
}

export default NAvBar;