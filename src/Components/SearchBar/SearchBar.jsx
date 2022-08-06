import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = (props) => {
    const [find, setFind] = useState('')

    function searchMusic(event){
        event.preventDefault();

        let response = props.songs.filter((song) => {
            if (song.title.includes(find) || 
                song.artist.includes(find) ||
                song.album.includes(find) ||
                song.release_date.includes(find) ||
                song.genre.includes(find)) {
                    return true;
                }
                else{
                    return false;
                }

        });
        props.setSongs(response)
    }

return(
    <form onSubmit={searchMusic}>
        <h3 className='title'>My Music Library</h3>
        <div className='container-search'>
            <input type='text' value={find} onChange={(event) =>setFind(event.target.value)} />
            <button type='submit'>Filter Search</button>
        </div>
    </form>
)
}
 
export default SearchBar;
