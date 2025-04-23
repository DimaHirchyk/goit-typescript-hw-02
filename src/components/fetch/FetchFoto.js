import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchFotoWithTopic = async (userQuery, page = 1) => {
  const params = {
    query: userQuery,
    client_id: "l8xdQE6Jn13MnYMcD4UpAxY1HMTjQpAJUcEtBcXnH7A",
    orientation: "portrait",
    per_page: 12,
    page,
  };
  const response = await axios.get("/search/photos", { params });

  return response.data;
};
