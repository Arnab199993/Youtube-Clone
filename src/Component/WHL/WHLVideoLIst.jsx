import React from 'react'
import ShowVideo from '../ShowVideo/ShowVideo'
import ShowVideoList from '../SHowVideoList/ShowVideoList'

const WHLVideoLIst = ({Page,VideoList}) => {
  return (
    <>
    <div>
       {VideoList.map((ele)=>(
        <div key={ele.id}>
            <ShowVideoList videoId={ele.id}/>
        </div>
       ))}
    </div>
    </>
  )
}

export default WHLVideoLIst