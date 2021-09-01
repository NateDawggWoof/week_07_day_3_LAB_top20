import React from 'react'

const GenreSelect =({genres, onGenreSelected}) => {
    const genreOptions = genres.map((genres,index) => {
        return<option value={index} key={index}>{genres.name}</option>
    })


    const handleChange = function (event) {
        const choosenGenre = genres[event.target.value]
        onGenreSelected(choosenGenre)
    }

    return(
        <select defaultValue="" onChange={handleChange}>
            <option value="">Choose a Genre</option>
            {genreOptions}
        </select>
    )


}

export default GenreSelect