
import SideNAvBAr from "../../Components/SideNAvBar/sideNavBAr";

import { useState, useEffect } from 'react'
import "./profile.css"

import { Link, useParams } from 'react-router-dom'

function Profile({ sideNavBar }) {

    const [data, setData] = useState([])

    const [user, setUser] = useState(null);

    const { id } = useParams();

    async function fetchData(url) {
        try {
            const res = await fetch(url);
            const data = await res.json();


            setData(data.video)

            setUser(data.video[0]?.user);

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }


    useEffect(() => {

        //68d830d4e1107da8b5563ba1
        fetchData(`http://localhost:3000/api/${id}/channel`);



    }, [])





    return (
        <div className="profile">
            <SideNAvBAr sideNavBar={sideNavBar} />

            <div className={sideNavBar ? "profilePage" : 'profile-page-inactive'}>
                <div className="profile_top_section">
                    <div className="profile_top_section_profile">
                        <img className="profile_top_section_img absolute left-[300px] top-[80px]" src={user?.profilePic} alt="alternate" />
                    </div>

                    <div className="profile_top_section_About">
                        <div className="profile_top_section_About_name">{user?.channelName}</div>
                        <div className="profile_top_section_info">
                            @{user?.userName}  . {data?.length} videos
                        </div>

                        <div className="profile_top_section_info">
                            {user?.about}
                        </div>

                    </div>
                </div>

                <div className="profile_videos">
                    <div className="profile_videos_title">
                        Video &nbsp;
                        <i class="fa-solid fa-play text-white"></i>
                    </div>

                    <div className="profileVideos">
                        {/**......div fora video.... */}

                        {
                            data?.map((item, key) => {
                                return (
                                    <Link to={`/watch/${item._id}`} className="profilevideo_block">

                                        <div className="profileVideo_block_thumbnail">
                                            <img className="profilevideo_block_thumbnail_img" src={item?.thumbnail} />

                                        </div>

                                        <div className="profilevideo_block_details">
                                            <div className="profilevideo_block_details_name">
                                                {item?.title}
                                            </div>

                                            <div className="profilevideo_block_details_about">
                                                Creat at 2025-09-22
                                            </div>
                                        </div>

                                    </Link>
                                )
                            })
                        }




                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;