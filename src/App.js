import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import SearchBar from './Components/SearchBar/SearchBar';
import CreateSong from './Components/CreateSong/CreateSong';
import './App.css';

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

  async function createSong(newSong){
    const response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
    if(response.status === 201){
      await getAllSongs();
    }
  }

  return (
    <div>
      <div>
        <SearchBar songs={songs} setSongs={setSongs} />
      </div>
      <div>
        <DisplayMusic songs={songs} />
      </div>
      <div>
        <CreateSong addSong={createSong} />
      </div>
    </div>
  );
}

export default App;
