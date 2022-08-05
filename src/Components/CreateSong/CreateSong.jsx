import React, { useState } from 'react';

const CreateSong = (props) => {

    const [newTitle, setTitle] = useState('');
    const [newArtist, setArtist] = useState('');
    const [newAlbum, setAlbum] = useState('');
    const [newReleaseDate, setReleaseDate] = useState('');
    const [newGenre, setGenre] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newSong = {
            "title": newTitle,
            "artist": newArtist,
            "album": newAlbum,
            "release_date": newReleaseDate,
            "genre": newGenre
        }

        props.addSong(newSong);

        setTitle("");
        setArtist("");
        setAlbum("");
        setReleaseDate("");
        setGenre("");
        
    }


    return (
        <div>
            <h3 className='new-song'>New Song</h3>
            <div className='new-song-container'>
                <form onSubmit={handleSubmit}>
                    <div className='container-form'>
                        <div>
                            <label className='label-form'>Title:</label>
                            <input type = 'text' value={newTitle} onChange={(event) => setTitle(event.target.value)}/>
                        </div>
                        <div>
                            <label className='label-form'>Artist:</label>
                            <input type = 'text' value={newArtist} onChange={(event) => setArtist(event.target.value)}/>
                        </div>
                        <div>
                            <label className='label-form'>Album:</label>
                            <input type = 'text' value={newArtist} onChange={(event) => setAlbum(event.target.value)}/>
                        </div>
                        <div>
                            <label className='label-form'>Release Date:</label>
                            <input type = 'text' value={newArtist} onChange={(event) => setReleaseDate(event.target.value)}/>
                        </div>
                        <div>
                            <label className='label-form'>Genre:</label>
                            <input type = 'text' value={newArtist} onChange={(event) => setGenre(event.target.value)}/>
                        </div>
                    </div>
                </form>

            </div>
        </div>
      );
}
 
export default CreateSong;
