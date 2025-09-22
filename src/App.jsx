
import './App.css'
import './index.css'
import NAvBar from './Components/NavBAr/navBar'
import Home from './Pages/Home/home'
import Video from './Pages/Video/video'

import { useState } from 'react'

import { Route, Routes } from 'react-router-dom'

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
      </Routes>



    </div>
  )
}

export default App
