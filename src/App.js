import React from "react"

import "./App.css"
import MainNav from "./components/Navbars/MainNav"
import LoginNav from "./components/Navbars/LoginNav"
import Banner from "./components/Banner/Banner"

function App() {
  return (
    <>
      <LoginNav />
      <MainNav />
      <Banner />
    </>
  )
}

export default App
