import axios from "axios";

const getLoyaltyCardById = (loyaltyCardId) => {
  const apiUrl = `https://perkify-api.onrender.com/api/loyalty_cards/${loyaltyCardId}`;

  console.log(loyaltyCardId);

  return axios.get(apiUrl).then((res) => {
    console.log(res.data.loyalty_card);
    return res.data;
  });
};

export default getLoyaltyCardById;
