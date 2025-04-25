const API_KEY ="";
const Base_Url = "";

export const getPopularMovies = async () => {
    const response = await fetch(`${Base_Url}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const searchMovie = async () => {
    const response = await fetch(`${Base_Url}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
};