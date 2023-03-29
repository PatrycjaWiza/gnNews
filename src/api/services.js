import axios from 'axios';

axios.defaults.baseURL = 'https://newsapi.org/v2/';
const API_KEY = '43522a0ff26d4f6997d0f1f5426d11d9';

export const getNews = async country => {
  const response = await axios.get(
    `top-headlines?country=${country}&apiKey=${API_KEY}`
  );
  return response.data.articles;
};
// export const getTotalRecords = async country => {
//   const response = await axios.get(
//     `top-headlines?country=pl&language=pl&apiKey=${API_KEY}`
//   );
//   return response.datatotalResults;
// };
