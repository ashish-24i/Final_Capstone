import "./sideNavBAr.css"

function SideNAvBAr({ sideNavBar }) {


    return (
        <div className={sideNavBar ? "home-sideNAvBAr" : "homeSideNAvBarHide"}>

            <div className="sideNAvBArTop">
                <div className={`home_sideNavbarTopOption hover:bg-slate-500 m-1 p-4`}>
                    <i class="fa-solid fa-house text-white"></i>
                    <span className="text-white">Home</span>
                </div>

                <div className={`home_sideNavbarTopOption hover:bg-slate-500  m-1 p-4`}>
                    <i class="fa-solid fa-video text-white "></i>
                    <span className="text-white">Shorts</span>
                </div>

                <div className={`home_sideNavbarTopOption hover:bg-slate-500 m-1 p-4`}>
                    <i class="fa-solid fa-bell text-white"></i>
                    <span className="text-white">Subscription</span>
                </div>
            </div>

            <div className="home_sideNAvBArMiddle">

                <div className={`home_sideNavbarTopOption hover:bg-slate-500`}>
                    <span className="text-white">You</span>
                    <i class="fa-solid fa-angle-right text-white"></i>
                </div>


                <div className={`home_sideNavbarTopOption hover:bg-slate-500 m-1 p-4`}>
                    <i class="fa-solid fa-arrow-right text-white"></i>
                    <span className="text-white">Your  Channel</span>
                </div>


                <div className={`home_sideNavbarTopOption hover:bg-slate-500 m-1 p-4`}>
                    <i class="fa-solid fa-clock-rotate-left text-white"></i>
                    <span className="text-white">History</span>
                </div>

                <div className={`home_sideNavbarTopOption hover:bg-slate-500 m-1 p-4`}>
                    <i class="fa-solid fa-list text-white"></i>
                    <span className="text-white">PlayList</span>
                </div>

                <div className={`home_sideNavbarTopOption hover:bg-slate-500 m-1 p-4`}>
                    <i class="fa-solid fa-circle-play text-white"></i>
                    <span className="text-white">Your Videos</span>
                </div>


                <div className={`home_sideNavbarTopOption hover:bg-slate-500 m-1 p-4`}>
                    <i class="fa-regular fa-clock text-white"></i>
                    <span className="text-white">Watch Later</span>
                </div>

                <div className={`home_sideNavbarTopOption hover:bg-slate-500 m-1 p-4`}>
                    <i class="fa-regular fa-thumbs-up  text-white"></i>
                    <span className="text-white">Liked Video</span>
                </div>


                <div className={`home_sideNavbarTopOption hover:bg-slate-500 m-1 p-4`}>
                    <i class="fa-solid fa-clapperboard text-white"></i>
                    <span className="text-white">Your Clip</span>
                </div>




            </div>

            <div className="home_sideNAvBArMiddle">

                <div className="title">SUbscriptions</div>

                <div className="flex flex-row gap-2">
                    <img src="./public/ajjtak.png" className="w-10  h-10 rounded-[50%] p-2" />
                    <span className="pt-2">Ajj TAk</span>
                </div>


                <div className="flex flex-row gap-2">
                    <img src="./public/india.png" className="w-10  h-10 rounded-[50%] p-2" />
                    <span className="pt-2">India Today</span>
                </div>


                <div className="flex flex-row gap-2">
                    <img src="./public/tv9.png" className="w-10  h-10 rounded-[50%] p-2" />
                    <span className="pt-2">TV9</span>
                </div>


            </div>


        </div>
    )
}

export default SideNAvBAr;