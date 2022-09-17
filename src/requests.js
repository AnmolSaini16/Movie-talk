const API_KEY = "edccfc1e796824b9d5eee1575f81badc";

const requests = {
  fetchPopularMovies: `movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchPopularMoviesinIndia: `movie/popular?api_key=${API_KEY}&with_origin_country=IN&language=en-US&page=1`,
  fetchTopRatedMovies: `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRatedMoviesinIndia: `movie/top_rated?api_key=${API_KEY}&with_origin_country=IN&language=en-US&page=1`,
  fetchUpcomingMovies: `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTrendinginIndia: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,

  fetchPopularTVshows: `tv/popular?api_key=${API_KEY}&with_origin_country=IN&with_origin_country=IN&language=en-US&page=1`,
  fetchTopRatedTVshows: `tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchComedyShows: `/discover/tv?api_key=${API_KEY}&with_origin_country=IN&with_genres=35`,
  fetchOntheAirShows: `tv/on_the_air?api_key=${API_KEY}&with_origin_country=IN&language=en-US&page=1`,
  fetchRomaceshows: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
};

export default requests;
