import React from 'react'
import "./Home.css"
import LeftSidebar from '../../Component/LeftSidebar/LeftSidebar'
const Home = () => {
  return (
    <>
    <div className='container-pages-app'>
        <LeftSidebar/>
        <div style={{color:"white"}} className="container2-pages-app">
          Home
        </div>
    </div>
    </>
  )
}

export default Home