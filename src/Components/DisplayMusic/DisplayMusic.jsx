import './DisplayMusic.css';

const DisplayMusic = (props) => {
    return (
        <div className='displayMusic-container'>
            <table className='music-table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                        <th>Likes</th>
                    </tr>
                </thead>
                <tbody>
                   {props.songs.map((song) => {
                    return (
                        <tr>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                            <td>{song.likes}</td>
                        </tr>
                    )
                   })} 
                </tbody>
            </table>
        </div>
    );
}
 
export default DisplayMusic;