import axios from 'axios';




const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/trending/all/day",
    params: {
        // per_page: 12,
        api_key: "04cb754e3fc264242ddc48b1c691d765"
    }
})
export const getImage = async (page=1) => {
    const {data} = await instance.get("", {
        params: {
            page,
        }
    });
    return data
}
export const searchImage = async (q, page=1) => {
    const {data} = await instance.get("/", {
        params: {
            q,
            page,
        }
    });
    return data
}


const KEY = '04cb754e3fc264242ddc48b1c691d765';
const BASE_URL = 'https://api.themoviedb.org/3/movie/550';
// const LIMIT = 12;

export const fetch = async (query, page) => {
    try {
        const response = await axios.get
        (`${BASE_URL}?&api_key=${KEY}`);
return response.data
    }
    catch (error) {
        console.log(error)
    }
}