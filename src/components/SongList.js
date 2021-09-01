import React from 'react'
import SongItem from './SongItem'


const SongList = ({songs}) => {

    const songItems=songs.map((song, index) => {
        return <SongItem song ={song} key={index} />


    })




    return(
        <div>
        <ul>
          {songItems}
        </ul>
      </div>
    )
}


export default SongList