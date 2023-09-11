import React from 'react'
import ShowVideo from '../ShowVideo/ShowVideo'
import "./ShowVideoGrid.css"
const ShowVideoGrid = (props) => {
  return (
    <div className='Container_ShowvideoGrid'>
      {
        props.videos.map((item)=>(
          <div key={item?.id} className='video_box'>
            <ShowVideo video={item}/>
          </div>
        ))
      }
      </div>
  )
}

export default ShowVideoGrid