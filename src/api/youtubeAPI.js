// src/api/youtubeAPI.js
import axios from 'axios';

const API_KEY = 'AIzaSyDWLcz7Ylbhk1iJdqULOi7VvWdfuc2HsBY';

export const getStrategyVideos = async (query = 'rainbow six siege strategies') => {
  const res = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${query}&key=${API_KEY}&maxResults=10`
  );
  return res.data.items;
};
