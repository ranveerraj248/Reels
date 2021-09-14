import { useEffect, useState } from 'react';
import './App.css';
import Video from './Video';
import axios from './axios.js';

function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts(){

      const response = await axios.get("/getVideos");
      setVideos(response.data);

      return response;
    }
    fetchPosts();
  }, []);

  console.log(videos);
  return (
    <div className="App">
      <div class="app__videos">
        {videos.map(

           ({url, channel, description, song, likes, messages, shares}) => 

           (
              <Video

              url = {url}
              channel = {channel}
              description = {description}
              song = {song}
              likes = {likes}
              messages = {messages}
              shares = {shares}

              />
            )
        )};
        
      </div>
    </div>
  );
}

export default App;
