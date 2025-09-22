import "./homePage.css"

import { Link } from 'react-router-dom'

function HomePage({ sideNavBar }) {

    const options = [
        "All",
        "Music",
        "Sports",
        "Gaming",
        "News",
        "Movies",
        "Live",
        "Fashion",
        "Learning",
        "Health",
        "Comedy",
        "Technology",
        "Travel",
        "Food",
        "Podcasts"
    ];


    return (
        <div className={sideNavBar ? "homePage" : "fullHomePage"}>

            <div className="homePage_options">

                {
                    options.map((item, index) => {
                        return (

                            <div key={index} className="homePage_option">
                                {item}

                            </div>
                        )
                    })
                }


            </div>

            <div className={sideNavBar ? "home_mainPage" : "homeMainPageWithoutLink"}>

                <Link to={"/watch/9876"} className="youtube_video">
                    <div className="youtune_thumbnailBox">

                        <img src="https://i.ytimg.com/vi/71lJD9WmFgc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB2uW0j_1nM3f1gLNmJqyztqqTPnw" alt="thumbnail" className="youtube_thumbnailPic" />

                        <div className="youtube_timingThumbnail">
                            28:05
                        </div>
                    </div>

                    <div className="youtubeTitleBox">
                        <div className="youtubeTitleBoxProfile">
                            <img src="https://i.ytimg.com/vi/dXIyMS61B68/hq720.jpg?v=628fe7c3&sqp=CJCpwcYG-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBszGZe87LHAMUhmmCFcCwM8HVNFg" alt="profile" className="youtube_thumbnail_profile" />


                        </div>

                        <div className="youtubeTitleBox_Title">
                            <div className="youtube_videoTitle">User1</div>
                            <div className="youtube_channelName">User1</div>
                            <div className="youtubeVideo_views">3 Likes</div>
                        </div>
                    </div>


                </Link>

                <Link to={'/watch/9897'} className="youtube_video">
                    <div className="youtune_thumbnailBox">

                        <img src="https://i.ytimg.com/vi/71lJD9WmFgc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB2uW0j_1nM3f1gLNmJqyztqqTPnw" alt="thumbnail" className="youtube_thumbnailPic" />

                        <div className="youtube_timingThumbnail">
                            28:05
                        </div>
                    </div>

                    <div className="youtubeTitleBox">
                        <div className="youtubeTitleBoxProfile">
                            <img src="https://i.ytimg.com/vi/dXIyMS61B68/hq720.jpg?v=628fe7c3&sqp=CJCpwcYG-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBszGZe87LHAMUhmmCFcCwM8HVNFg" alt="profile" className="youtube_thumbnail_profile" />


                        </div>

                        <div className="youtubeTitleBox_Title">
                            <div className="youtube_videoTitle">User1</div>
                            <div className="youtube_channelName">User1</div>
                            <div className="youtubeVideo_views">3 Likes</div>
                        </div>
                    </div>


                </Link>

                <Link to={'/watch/9897'} className="youtube_video">
                    <div className="youtune_thumbnailBox">

                        <img src="https://i.ytimg.com/vi/71lJD9WmFgc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB2uW0j_1nM3f1gLNmJqyztqqTPnw" alt="thumbnail" className="youtube_thumbnailPic" />

                        <div className="youtube_timingThumbnail">
                            28:05
                        </div>
                    </div>

                    <div className="youtubeTitleBox">
                        <div className="youtubeTitleBoxProfile">
                            <img src="https://i.ytimg.com/vi/dXIyMS61B68/hq720.jpg?v=628fe7c3&sqp=CJCpwcYG-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBszGZe87LHAMUhmmCFcCwM8HVNFg" alt="profile" className="youtube_thumbnail_profile" />


                        </div>

                        <div className="youtubeTitleBox_Title">
                            <div className="youtube_videoTitle">User1</div>
                            <div className="youtube_channelName">User1</div>
                            <div className="youtubeVideo_views">3 Likes</div>
                        </div>
                    </div>


                </Link>

                <Link to={'/watch/9897'} className="youtube_video">
                    <div className="youtune_thumbnailBox">

                        <img src="https://i.ytimg.com/vi/71lJD9WmFgc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB2uW0j_1nM3f1gLNmJqyztqqTPnw" alt="thumbnail" className="youtube_thumbnailPic" />

                        <div className="youtube_timingThumbnail">
                            28:05
                        </div>
                    </div>

                    <div className="youtubeTitleBox">
                        <div className="youtubeTitleBoxProfile">
                            <img src="https://i.ytimg.com/vi/dXIyMS61B68/hq720.jpg?v=628fe7c3&sqp=CJCpwcYG-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBszGZe87LHAMUhmmCFcCwM8HVNFg" alt="profile" className="youtube_thumbnail_profile" />


                        </div>

                        <div className="youtubeTitleBox_Title">
                            <div className="youtube_videoTitle">User1</div>
                            <div className="youtube_channelName">User1</div>
                            <div className="youtubeVideo_views">3 Likes</div>
                        </div>
                    </div>


                </Link>

                <Link to={'/watch/9897'} className="youtube_video">
                    <div className="youtune_thumbnailBox">

                        <img src="https://i.ytimg.com/vi/71lJD9WmFgc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB2uW0j_1nM3f1gLNmJqyztqqTPnw" alt="thumbnail" className="youtube_thumbnailPic" />

                        <div className="youtube_timingThumbnail">
                            28:05
                        </div>
                    </div>

                    <div className="youtubeTitleBox">
                        <div className="youtubeTitleBoxProfile">
                            <img src="https://i.ytimg.com/vi/dXIyMS61B68/hq720.jpg?v=628fe7c3&sqp=CJCpwcYG-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBszGZe87LHAMUhmmCFcCwM8HVNFg" alt="profile" className="youtube_thumbnail_profile" />


                        </div>

                        <div className="youtubeTitleBox_Title">
                            <div className="youtube_videoTitle">User1</div>
                            <div className="youtube_channelName">User1</div>
                            <div className="youtubeVideo_views">3 Likes</div>
                        </div>
                    </div>


                </Link>

                <Link to={'/watch/9897'} className="youtube_video">
                    <div className="youtune_thumbnailBox">

                        <img src="https://i.ytimg.com/vi/71lJD9WmFgc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB2uW0j_1nM3f1gLNmJqyztqqTPnw" alt="thumbnail" className="youtube_thumbnailPic" />

                        <div className="youtube_timingThumbnail">
                            28:05
                        </div>
                    </div>

                    <div className="youtubeTitleBox">
                        <div className="youtubeTitleBoxProfile">
                            <img src="https://i.ytimg.com/vi/dXIyMS61B68/hq720.jpg?v=628fe7c3&sqp=CJCpwcYG-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBszGZe87LHAMUhmmCFcCwM8HVNFg" alt="profile" className="youtube_thumbnail_profile" />


                        </div>

                        <div className="youtubeTitleBox_Title">
                            <div className="youtube_videoTitle">User1</div>
                            <div className="youtube_channelName">User1</div>
                            <div className="youtubeVideo_views">3 Likes</div>
                        </div>
                    </div>


                </Link>


            </div>


        </div>
    )
}


export default HomePage;