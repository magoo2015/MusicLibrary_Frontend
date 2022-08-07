import React, { useState } from 'react';
import './CreateSong.css'

const CreateSong = (props) => {

    const [newTitle, setTitle] = useState('');
    const [newArtist, setArtist] = useState('');
    const [newAlbum, setAlbum] = useState('');
    const [newReleaseDate, setReleaseDate] = useState('');
    const [newGenre, setGenre] = useState('');
    const [newLikes, setLikes] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newSong = {
            "title": newTitle,
            "artist": newArtist,
            "album": newAlbum,
            "release_date": newReleaseDate,
            "genre": newGenre,
            "likes": newLikes,

        }

        props.addSong(newSong);

        setTitle("");
        setArtist("");
        setAlbum("");
        setReleaseDate("");
        setGenre("");
        setLikes("");
        
    }


    return (
        <div className='new-song-section'>
            <h3 className='new-song'>New Song</h3>
            <div className='new-song-container'>
                <form onSubmit={handleSubmit}>
                    <div className='container-form'>
                        <div>
                            <label className='label-form'>Title:</label>
                            <input type = 'text' placeholder='Title' value={newTitle} onChange={(event) => setTitle(event.target.value)}/>
                        </div>
                        <div>
                            <label className='label-form'>Artist:</label>
                            <input type = 'text' placeholder='Artist' value={newArtist} onChange={(event) => setArtist(event.target.value)}/>
                        </div>
                        <div>
                            <label className='label-form'>Album:</label>
                            <input type = 'text' placeholder='Album' value={newAlbum} onChange={(event) => setAlbum(event.target.value)}/>
                        </div>
                        <div>
                            <label className='label-form'>Release Date:</label>
                            <input type = 'date' placeholder='Release_Date' value={newReleaseDate} onChange={(event) => setReleaseDate(event.target.value)}/>
                        </div>
                        <div>
                            <label className='label-form'>Genre:</label>
                            <input type = 'text' placeholder='Genre' value={newGenre} onChange={(event) => setGenre(event.target.value)}/>
                        </div>
                        <div>
                            <label className='label-form'>Likes:</label>
                            <input type = 'text' placeholder='Likes' value={newLikes} onChange={(event) => setLikes(event.target.value)}/><button type='submit' className='addnewsong-button'>Add New Song</button>
                        </div>
                    </div>
                    <div className='newsong-button'>
                        <div>
                            
                        </div>
                    </div>
                    <div>
                    
                    </div>
                </form>

            </div>
        </div>
      );
}
 
export default CreateSong;
