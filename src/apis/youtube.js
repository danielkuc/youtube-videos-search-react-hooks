import axios from'axios'

const KEY = 'AIzaSyDanOfzaotwvEIxOtmySk2fZFTnnIMCB38';
// key is restricted to localhost!

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});