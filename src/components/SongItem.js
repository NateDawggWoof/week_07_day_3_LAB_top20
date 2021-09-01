import React from 'react'
import SongList from './SongList'

const SongItem = ({song}) => {





    return (
        <li>Song Title {song.title.label} Artist: {song["im:artist"].label}</li>
    )
}

export default SongItem