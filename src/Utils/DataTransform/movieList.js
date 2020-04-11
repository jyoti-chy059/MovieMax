export const transformMovieList = (list) => {
  return list.map((data) => ({
    name: data.title,
    date: data.release_date,
    image: data.poster_path,
  }));
};
