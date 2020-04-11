import axios from 'axios'
import { API_KEY, language, serviceURL } from '../Utils/constant'
const API = {
  fetchPlayingMovieList: () => axios.get(`${serviceURL}/now_playing?api_key=${API_KEY}&language=${language}&page=1`),
  fetchPopulatMovieList: () => axios.get(`${serviceURL}/popular?api_key=${API_KEY}&language=${language}&page=1`),
  fetchTopRatedMovieList: () => axios.get(`${serviceURL}/top_rated?api_key=${API_KEY}&language=${language}&page=1`),
  fetchUpcomingMovieList: () => axios.get(`${serviceURL}/upcoming?api_key=${API_KEY}&language=${language}&page=1`),
}
export default API
