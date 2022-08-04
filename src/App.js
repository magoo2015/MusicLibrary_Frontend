import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect (() => {
    getAllSongs();
  }, []);

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data);
    setSongs(response.data)
  }

  

  return (
    <div>
      <div>
        <DisplayMusic songs={songs} />
      </div>
      <div>
        <SearchBar songs={songs} setSongs={setSongs} />
      </div>
    </div>
  );
}

export default App;
