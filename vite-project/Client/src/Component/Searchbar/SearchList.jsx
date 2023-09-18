import React, { useState } from 'react'
import "./Searchlist.css"
import {CiSearch} from "react-icons/ci"
const SearchList = (props) => {
   
  return (
    <>
    <div className='cont-searchlist'>
        {props.filteredData.map((item,index)=>(
             <p key={index}  className='title-item'>
             <CiSearch/>
             <span  onClick={()=>props.setSearchQuery(item)} style={{marginLeft:"5px"}}>{item}</span>
         </p>
        ))}
        {/* <p  className='title-item'>
            <CiSearch/>
            <span style={{marginLeft:"5px"}}>Item 1</span>
        </p>
        <p  className='title-item'>
            <CiSearch/>
            <span style={{marginLeft:"5px"}}>Item 2</span>
        </p> */}
    </div>
    </>
  )
}

export default SearchList