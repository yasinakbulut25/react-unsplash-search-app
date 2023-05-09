import axios from "axios";
const searchImages = async (getValue, getPage) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID {YOUR_API_KEY}",
    },
    params: {
      query: getValue,
      page: getPage,
    },
  });
  return response.data;
};

export default searchImages;
