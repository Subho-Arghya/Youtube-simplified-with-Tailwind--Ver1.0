import axios from "axios";


//Sample Search API

// const options = {
//   method: 'GET',
//   url: 'https://youtube138.p.rapidapi.com/search/',
//   params: {
//     q: 'uptown funk',
//     hl: 'en',
//     gl: 'US'
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.RAPDAPI_KEY,
//     'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_RAPDAPI_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchQueryFromAPI = async (url) => {
    try {
        let response = await axios.get(BASE_URL + "/" + url, options)
        return response.data
    } catch (error) {
       throw error 
    }
}