
import './App.css'
import './index.css'
import NAvBar from './Components/NavBAr/navBar'
import Home from './Pages/Home/home'

import { useState } from 'react'

function App() {

  const [sideNavBar, setSideNavBar] = useState(true)

  function setSideNavBarFunc(value) {
    setSideNavBar(value)
  }


  return (
    <div className="App">
      <NAvBar setSideNavBarFunc={setSideNavBarFunc} sideNavBar={sideNavBar} />

      <Home sideNavBar={sideNavBar} />

    </div>
  )
}

export default App
