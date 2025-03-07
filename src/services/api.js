import axios from "axios";

const API_KEY = "MH2Cl9dmlA6VCRuYzTv_4n326c2Mp_C0YuB8hGEMPRo";

export const fetchImages = async (query, page, perPage = 16) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos?`, {
    params: {
      client_id: API_KEY,
      query: query,
      page: page,
      per_page: perPage,
      order_by: `views`,
      orientation: `landscape`,
    },
  });
  return response.data;
};
