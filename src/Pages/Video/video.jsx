import "./video.css"

function Video() {

    return (
        <div className="video absolute top-0 right-0 left-0">
            <div className="videoPostSection">

                <div className="video_youtube">

                    <iframe
                        width="850px"
                        height="400px"
                        className="rounded-3xl"
                        src="https://www.youtube.com/embed/B8zlLoW-Jfo"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                </div>

                <div className="video_youtube_About">
                    <div className="video_youtube_title"> {'javascript for beginner'}</div>
                    <div className="youtube_video_profile_block">
                        <div className="youtubeVideoProfileBlockLeft">
                            <div className="youtube_video_profile_block_left_img">
                                <img className="youtube_video_profileBlock_left_image" src="data:image/jpeg;base64,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" alt="alternate" />

                                <div className="youtubeVideo_subsView">
                                    <div className="youtubepostprofilename">{"User1"}</div>
                                    <div className="youtubepostprofilesubs  s">{"2024-07-09"}</div>

                                </div>

                                <div className="subscribebtnyoutube relative left-20 bottom-28 w-20">Subscribe</div>




                            </div>
                        </div>

                        <div className="youtubeVideoLikeBlock">

                            <div className="youtube_video_likeBlock_likers    flex flex-row gap-4">
                                <i class="fa-solid fa-thumbs-up  text-white"></i>
                                <div className="youtube_video_likeblock_numoflike">{32}</div>


                                <div className="youtubeVideoDivider w-0 h-[20px] border border-blue-800">

                                </div>

                                <div className="youtube_video_likeBlock_liker">
                                    <i class="fa-solid fa-thumbs-down text-white"></i>
                                </div>
                            </div>






                        </div>

                    </div>

                    <div className="youtube_video_About">
                        <div>2024-09-30</div>
                        <div>This is the cool video</div>
                    </div>
                </div>


                <div className="youtube_comment_section">
                    <div className="youtubecommentsectiontitle">
                        2 comments
                    </div>

                    <div className="youtubeselfcomment">
                        <img className="video_youtubeselfcommentprofile" src="data:image/jpeg;base64,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" />
                        <div className="addAcomment">
                            <input type="text" className="addACommentInput" placeholder="Add acomment" />

                            <div className="cancelSubmitComment">
                                <div className="cancelcomment">Cancel</div>
                                <div className="cancelcomment">Comment</div>
                            </div>
                        </div>
                    </div>

                    <div className="youtubeOthersComment">

                        <div className="youtubeselfcommnt">

                            <img className="video_youtubeselfcommentprofile" src="data:image/jpeg;base64,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" />

                            <div className="othercommentsection">
                                <div className="othercommentsectionhadder">
                                    <div className="channelName_comment">UserName</div>
                                    <div className="commenttimingothers">2025-09-30</div>
                                </div>

                                <div className="othercommentsectioncomment">
                                    This is the cool web app project
                                </div>
                            </div>
                        </div>

                        <div className="youtubeselfcommnt">

                            <img className="video_youtubeselfcommentprofile" src="data:image/jpeg;base64,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" />

                            <div className="othercommentsection">
                                <div className="othercommentsectionhadder">
                                    <div className="channelName_comment">UserName</div>
                                    <div className="commenttimingothers">2025-09-30</div>
                                </div>

                                <div className="othercommentsectioncomment">
                                    This is the cool web app project
                                </div>
                            </div>
                        </div>

                        <div className="youtubeselfcommnt">

                            <img className="video_youtubeselfcommentprofile" src="data:image/jpeg;base64,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" />

                            <div className="othercommentsection">
                                <div className="othercommentsectionhadder">
                                    <div className="channelName_comment">UserName</div>
                                    <div className="commenttimingothers">2025-09-30</div>
                                </div>

                                <div className="othercommentsectioncomment">
                                    This is the cool web app project
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>



            <div className="videoSuggestion">


                <div className="videoSuggestionBlock">
                    <div className="video_suggestion_thumbnail">

                        <img className="video_suggestion_thumbnail_img" src="https://i.ytimg.com/vi/CakDDkF-Qv4/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYZSBkKE8wDw==&rs=AOn4CLDJ-V_5ecO8BLJW8PKAhNjFwR3aWA" />


                    </div>

                    <div className="videoSuggestion_about">
                        <div className="video_suggestion_about_title">
                            T20 2025 Asia CUp Final India Vs Srilanka LAst 5 Over #cricket #India
                        </div>
                        <div className="video_suggestion_about_profile"> Cricket 320</div>
                        <div className="video_suggestion_about_profile"> 136K views . 1 day ago</div>

                    </div>
                </div>

                <div className="videoSuggestionBlock">
                    <div className="video_suggestion_thumbnail">

                        <img className="video_suggestion_thumbnail_img" src="https://i.ytimg.com/vi/CakDDkF-Qv4/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYZSBkKE8wDw==&rs=AOn4CLDJ-V_5ecO8BLJW8PKAhNjFwR3aWA" />


                    </div>

                    <div className="videoSuggestion_about">
                        <div className="video_suggestion_about_title">
                            T20 2025 Asia CUp Final India Vs Srilanka LAst 5 Over #cricket #India
                        </div>
                        <div className="video_suggestion_about_profile"> Cricket 320</div>
                        <div className="video_suggestion_about_profile"> 136K views . 1 day ago</div>

                    </div>
                </div>

                <div className="videoSuggestionBlock">
                    <div className="video_suggestion_thumbnail">

                        <img className="video_suggestion_thumbnail_img" src="https://i.ytimg.com/vi/CakDDkF-Qv4/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYZSBkKE8wDw==&rs=AOn4CLDJ-V_5ecO8BLJW8PKAhNjFwR3aWA" />


                    </div>

                    <div className="videoSuggestion_about">
                        <div className="video_suggestion_about_title">
                            T20 2025 Asia CUp Final India Vs Srilanka LAst 5 Over #cricket #India
                        </div>
                        <div className="video_suggestion_about_profile"> Cricket 320</div>
                        <div className="video_suggestion_about_profile"> 136K views . 1 day ago</div>

                    </div>
                </div>

                <div className="videoSuggestionBlock">
                    <div className="video_suggestion_thumbnail">

                        <img className="video_suggestion_thumbnail_img" src="https://i.ytimg.com/vi/CakDDkF-Qv4/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYZSBkKE8wDw==&rs=AOn4CLDJ-V_5ecO8BLJW8PKAhNjFwR3aWA" />


                    </div>

                    <div className="videoSuggestion_about">
                        <div className="video_suggestion_about_title">
                            T20 2025 Asia CUp Final India Vs Srilanka LAst 5 Over #cricket #India
                        </div>
                        <div className="video_suggestion_about_profile"> Cricket 320</div>
                        <div className="video_suggestion_about_profile"> 136K views . 1 day ago</div>

                    </div>
                </div>

                <div className="videoSuggestionBlock">
                    <div className="video_suggestion_thumbnail">

                        <img className="video_suggestion_thumbnail_img" src="https://i.ytimg.com/vi/CakDDkF-Qv4/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYZSBkKE8wDw==&rs=AOn4CLDJ-V_5ecO8BLJW8PKAhNjFwR3aWA" />


                    </div>

                    <div className="videoSuggestion_about">
                        <div className="video_suggestion_about_title">
                            T20 2025 Asia CUp Final India Vs Srilanka LAst 5 Over #cricket #India
                        </div>
                        <div className="video_suggestion_about_profile"> Cricket 320</div>
                        <div className="video_suggestion_about_profile"> 136K views . 1 day ago</div>

                    </div>
                </div>

                <div className="videoSuggestionBlock">
                    <div className="video_suggestion_thumbnail">

                        <img className="video_suggestion_thumbnail_img" src="https://i.ytimg.com/vi/CakDDkF-Qv4/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYZSBkKE8wDw==&rs=AOn4CLDJ-V_5ecO8BLJW8PKAhNjFwR3aWA" />


                    </div>

                    <div className="videoSuggestion_about">
                        <div className="video_suggestion_about_title">
                            T20 2025 Asia CUp Final India Vs Srilanka LAst 5 Over #cricket #India
                        </div>
                        <div className="video_suggestion_about_profile"> Cricket 320</div>
                        <div className="video_suggestion_about_profile"> 136K views . 1 day ago</div>

                    </div>
                </div>

                <div className="videoSuggestionBlock">
                    <div className="video_suggestion_thumbnail">

                        <img className="video_suggestion_thumbnail_img" src="https://i.ytimg.com/vi/CakDDkF-Qv4/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYZSBkKE8wDw==&rs=AOn4CLDJ-V_5ecO8BLJW8PKAhNjFwR3aWA" />


                    </div>

                    <div className="videoSuggestion_about">
                        <div className="video_suggestion_about_title">
                            T20 2025 Asia CUp Final India Vs Srilanka LAst 5 Over #cricket #India
                        </div>
                        <div className="video_suggestion_about_profile"> Cricket 320</div>
                        <div className="video_suggestion_about_profile"> 136K views . 1 day ago</div>

                    </div>
                </div>

                <div className="videoSuggestionBlock">
                    <div className="video_suggestion_thumbnail">

                        <img className="video_suggestion_thumbnail_img" src="https://i.ytimg.com/vi/CakDDkF-Qv4/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYZSBkKE8wDw==&rs=AOn4CLDJ-V_5ecO8BLJW8PKAhNjFwR3aWA" />


                    </div>

                    <div className="videoSuggestion_about">
                        <div className="video_suggestion_about_title">
                            T20 2025 Asia CUp Final India Vs Srilanka LAst 5 Over #cricket #India
                        </div>
                        <div className="video_suggestion_about_profile"> Cricket 320</div>
                        <div className="video_suggestion_about_profile"> 136K views . 1 day ago</div>

                    </div>
                </div>
            </div>
        </div>
    )

}


export default Video;