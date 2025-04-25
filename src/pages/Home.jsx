import { useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";

function Home() {
  const movies = [
    { id: 1, title: "Movie 1", release_date: "2020" },
    { id: 2, title: "Movie 2", release_date: "2021" },
    { id: 3, title: "Movie 3", release_date: "2022" },
  ];

  const [searchquery, setSearchQuery] = useState("");
  const handleSearch = (e)=> {
    e.preventDefault();
    alert(searchquery);
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for movie..."
          className="search-input"
          value={searchquery}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></input>
        <button type="submit" className="search_button">Search</button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
export default Home;
