import axios from 'axios';

const movieBaseUrl = 'https://api.themoviedb.org/3';
const api_key = '2ec0d66f5bdf1dd12eefa0723f1479cf';
const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie';

const getTrendingVideos = () => {
  return axios.get(`${movieBaseUrl}/trending/all/day`, {
    params: { api_key },
  });
};

const getMovieByGenreId = (id) => {
  return axios.get(`${movieByGenreBaseURL}`, {
    params: {
      api_key,
      with_genres: id,
    },
  });
};

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
