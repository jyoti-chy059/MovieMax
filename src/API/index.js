import axios from 'axios';
import { API_KEY, language, serviceURL } from '../Utils/constant';

const API = {
  fetchPlayingMovieList: (pageNo) =>
    axios.get(
      `${serviceURL}/now_playing?api_key=${API_KEY}&language=${language}&page=${pageNo}`,
    ),
  fetchPopulatMovieList: (pageNo) =>
    axios.get(
      `${serviceURL}/popular?api_key=${API_KEY}&language=${language}&page=${pageNo}`,
    ),
  fetchTopRatedMovieList: (pageNo) =>
    axios.get(
      `${serviceURL}/top_rated?api_key=${API_KEY}&language=${language}&page=${pageNo}`,
    ),
  fetchUpcomingMovieList: (pageNo) =>
    axios.get(
      `${serviceURL}/upcoming?api_key=${API_KEY}&language=${language}&page=${pageNo}`,
    ),
};
export default API;
