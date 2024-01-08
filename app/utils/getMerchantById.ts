import axios from "axios";

const getMerchantById = (merchantId) => {
  const apiUrl = `https://perkify-api.onrender.com/api/merchants/${merchantId}`;

  return axios.get(apiUrl).then((res) => {
    console.log(res.data.merchant);
    return res.data.merchant;
  });
};

export default getMerchantById;
