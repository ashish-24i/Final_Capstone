
import './App.css'
import './index.css'
import NAvBar from './Components/NavBAr/navBar'
import Home from './Pages/Home/home'
import Video from './Pages/Video/video'

import { useState, useEffect } from 'react'

import { Route, Routes, useFetcher } from 'react-router-dom'
import Profile from './Pages/Profile/profile'
import VideoUpload from './Pages/videoUpload/videoUpload'
import SignUp from './Pages/SignUp/signup'

function App() {

  const [sideNavBar, setSideNavBar] = useState(true)

  const [videos, setVideos] = useState([]);

  // async function fetchData(url) {
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     console.log(data)
  //     setVideos(data.videos);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }


  // useEffect(() => {

  //   fetchData("http://localhost:3000/api/allvideo");



  // }, [])



  function setSideNavBarFunc(value) {
    setSideNavBar(value)
  }




  return (
    <div className="App">
      <NAvBar setSideNavBarFunc={setSideNavBarFunc} sideNavBar={sideNavBar} />

      <Routes>
        <Route path='/' element={<Home sideNavBar={sideNavBar} />} />
        <Route path='/watch/:id' element={<Video />} />
        <Route path="/user/:id" element={<Profile sideNavBar={sideNavBar} />} />
        <Route path='/:id/upload' element={<VideoUpload />} />

        <Route path='/signup' element={<SignUp />} />
      </Routes>



    </div>
  )
}

export default App
