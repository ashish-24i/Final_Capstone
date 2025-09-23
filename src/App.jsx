
import './App.css'
import './index.css'
import NAvBar from './Components/NavBAr/navBar'
import Home from './Pages/Home/home'
import Video from './Pages/Video/video'

import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'
import Profile from './Pages/Profile/profile'
import VideoUpload from './Pages/videoUpload/videoUpload'
import SignUp from './Pages/SignUp/signup'

function App() {

  const [sideNavBar, setSideNavBar] = useState(true)

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
