import React, { useState } from "react";
import "./Searchbar.css";
import { FaSearch } from "react-icons/fa";
import { BsMicFill } from "react-icons/bs";
import SearchList from "./SearchList";
const Searchbar = () => {
  const [searchQuery,setSearchQuery]=useState("")
  const [searchListdetails,setSearchList]=useState(false)
  const [title]=useState(["Video 1","video 2","movies","Animation Video"])
  const filteredData=title.filter((data)=>data?.toLowerCase().includes(searchQuery))
  return (
    <div>
      <div className="searchbar-container">
        <div className="searchbar-container2">
          <div className="search-div">
            <input
            onChange={(e)=>setSearchQuery(e.target.value)}
            value={searchQuery}
            onClick={()=>setSearchList(true)}
              className="ibox-searchbar"
              type="text"
              placeholder="search"
            />
            <FaSearch onClick={()=>setSearchList(false)} className="search-icon-searchbar" />
            <BsMicFill className="mic-searchbar" />
          </div>
          {searchQuery && searchListdetails && <SearchList setSearchQuery={setSearchQuery}
           filteredData={filteredData}/>}
          
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
