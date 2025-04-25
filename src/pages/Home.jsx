import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { getPopularMovies, searchMovie } from "../services/Api";

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("faild to fetch movies....");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);

    try {
      const searchResults = await searchMovie(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("faild to fetch movies....");
    } finally {
      setLoading(false);
    }

    setSearchQuery("");
  };

  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for movie..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></input>
        <button type="submit" className="search_button">
          Search
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
