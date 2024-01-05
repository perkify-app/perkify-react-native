import axios from "axios";

const getAllMerchants = () => {
  const apiUrl = `https://perkify-api.onrender.com/api/merchants`;

  return axios.get(apiUrl).then((res) => {
    console.log(res.data.merchants);
    return res.data.merchants;
  });
};

export default getAllMerchants;
