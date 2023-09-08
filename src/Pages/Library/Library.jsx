import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import LeftSidebar from '../../Component/LeftSidebar/LeftSidebar'


const Library = () => {
  return (
    <>
     <Navbar/>
    <div className='container-pages-app'>
        <LeftSidebar/>
        <div style={{color:"white"}} className="container2-pages-app">
          Librarysssssss
        </div>
    </div>
    </>
  )
}

export default Library