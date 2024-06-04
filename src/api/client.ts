import axios from 'axios';

const apiUrl = 'https://newsapi.org/v2/top-headlines?' +
'country=us&' +
'apiKey=507b67a8b8ac4708a190f50fbcab2a50';

const client = axios.create({
  baseURL: apiUrl,
  withCredentials: false,
});

export {
  client,
  apiUrl,
}