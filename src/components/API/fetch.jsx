import axios from 'axios';


const BASE_URL = 'https://api.themoviedb.org/3';

// const MOVIE_ID_URL = `${BASE_URL}/movie/`;

const instance = axios.create({
    baseURL: `${BASE_URL}`,
    params: {
        api_key: "04cb754e3fc264242ddc48b1c691d765"
    }
})
export const getMovie = async (page=1) => {
    const {data} = await instance.get("/trending/all/day", {
        params: {
            page,
        }
    });
    return data
};

export const getMovieById = async (id) => {
    const {data} = await instance.get(`/movie/${id}`);
    return data
};

export const searchMovie = async (query, page=1) => {
    const {data} = await instance.get("/search/movie", {
        params: {
            query,
            page,
        }
    });
    return data
};

export const getCastsById = async (id) => {
    const {data} = await instance.get(`/movie/${id}/credits`);
    return data
};


// const KEY = '04cb754e3fc264242ddc48b1c691d765';
// const BASE_URL = 'https://api.themoviedb.org/3/movie/550';
// // const LIMIT = 12;

// export const fetch = async (query, page) => {
//     try {
//         const response = await axios.get
//         (`${BASE_URL}?&api_key=${KEY}`);
// return response.data
//     }
//     catch (error) {
//         console.log(error)
//     }
// }