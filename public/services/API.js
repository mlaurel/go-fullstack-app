export const API = {
    baseURL: "/api/",
    getTopMovies: async () => {
        return await API.fetch("movies/top/")
    },
    getRandomMovies: async () => {
        return await API.fetch("movies/random/")
    },
    getGenres: async () => {
        return await API.fetch("genres/")
    },
    getMovieById: async (id) => {
        return await API.fetch(`movies/${id}`)
    },
    searchMovies: async (q, order, genre) => {
        return await API.fetch(`movies/search/`, { q, order, genre })
    },
    fetch: async (service, args) => {
        try {
            const queryString = args ? new URLSearchParams(args).toString() : "";
            const response = await fetch(API.baseURL + service + '?' + queryString);
            const result = await response.json();
            return result;
        } catch (e) {
            console.error(e);
        }
    }
}

export default API;
