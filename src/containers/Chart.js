import React, { useEffect, useState } from 'react'
import GenreSelect from '../components/GenreSelect';
import SongList from '../components/SongList'


const Chart =  () => {
    const [songs, setSongs] = useState([]);
    const[selectedGenre, setSelectedGenre] = useState(null);

    const genres = [
    {
        name: "All", 
        url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
    },
    {
        name: "Rock", 
        url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json"
    },
    {
        name: "Dance", 
        url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json"
    },
    {
        name: "Country", 
        url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json"
    }]
    



    const getSongs = function(){
        // if (selectedGenre != null){
        fetch(selectedGenre.url)
        .then(res => res.json())
        .then(songs => setSongs(songs.feed.entry));
        console.log(songs)
    }
// }
useEffect(() =>
    {
	if(selectedGenre){
            getSongs();
	}
    },[selectedGenre]);

    // useEffect(() =>
    // {
    //     getSongs();
    // },[])

    // const onGenreClick = function(genre) {
    //     setSelectedGenre(genre)
    // }

    const onGenreSelected = function(genre){
        setSelectedGenre(genre)
    }


    return(
        <>
        <h2>Here's the TOP 20 woop!</h2>
        <GenreSelect genres={genres} onGenreSelected={onGenreSelected}/>
        {selectedGenre ? <SongList songs={songs}/> : null}
        
        </>
    )

}

export default Chart