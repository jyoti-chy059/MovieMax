import React, { useEffect, useCallback, useState } from 'react'
import axios from 'axios'
import Card from './card'
import './index.css'
import { transformMovieList } from './Utils/DataTransform/movieList'
import HeaderPanel from './Components/header'

const Home = () => {
  //top_rated
  const [popularMovieList, setPopularMovieList] = useState(undefined)
  const [latestMovieList, setLatestMovieList] = useState(undefined)
  const [upcomingMovieList, setUpcomingMovieList] = useState(undefined)
  const [topRatedMovieList, setTopRatedMovieList] = useState(undefined)

  const fetchInitialData = useCallback(async () => {
    const API_KEY = 'a0da68008bbb48faac6fe3eefddb76ba'
    const language = 'en-US'
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=${language}&page=1`,
      )
      setPopularMovieList(transformMovieList(data.results))
    } catch (err) {
      console.log(err)
    }
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=${language}&page=1`,
      )
      setLatestMovieList(transformMovieList(data.results))
    } catch (err) {
      console.log(err)
    }
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=${language}&page=1`,
      )
      setUpcomingMovieList(transformMovieList(data.results))
    } catch (err) {
      console.log(err)
    }
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=${language}&page=1`,
      )
      setTopRatedMovieList(transformMovieList(data.results))
    } catch (err) {
      console.log(err)
    }
  }, [])

  useEffect(() => {
    fetchInitialData()
  }, [fetchInitialData])
  return (
    <>
      <div className="panel">
        <HeaderPanel text={`Now Playing`} />
        <div className="cardContainer">{latestMovieList && <Card list={latestMovieList} />}</div>
      </div>
      <div className="panel">
        <HeaderPanel text={`Upcoming`} />
        <div className="cardContainer">{upcomingMovieList && <Card list={upcomingMovieList} />}</div>
      </div>
      <div className="panel">
        <HeaderPanel text={`Top Rated`} />
        <div className="cardContainer">{topRatedMovieList && <Card list={topRatedMovieList} />}</div>
      </div>

      <div className="panel">
        <HeaderPanel text={`What's Popular`} />
        <div className="cardContainer">{popularMovieList && <Card list={popularMovieList} />}</div>
      </div>
    </>
  )
}
export default Home
