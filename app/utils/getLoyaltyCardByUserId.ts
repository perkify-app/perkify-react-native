import axios from "axios";

const getLoyaltyCardByUserId = (userId) => {
  const apiUrl = `https://perkify-api.onrender.com/api/loyalty_cards?user_id=${userId}`;

  return axios.get(apiUrl).then((res) => {
    console.log(res.data.loyalty_cards);
    return res.data.loyalty_cards;
  });
};

export default getLoyaltyCardByUserId;
