import React, { useEffect, useState } from 'react'
import SongList from '../components/SongList'


const Chart =  () => {
    const [songs, setSongs] = useState([]);



    const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(songs => setSongs(songs.feed.entry));
        console.log(songs)
    }

    useEffect(() =>
    {
        getSongs();
    },[])


    return(
        <>
        <h2>Here's the TOP 20 woop!</h2>
        <SongList songs={songs}/>
        </>
    )

}

export default Chart