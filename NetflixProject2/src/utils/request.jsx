
const API_KEY = import.meta.env.VITE_API_KEY;

 
// "42f45349c80c33050cb6eaf024826465";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,

};

export default requests;
