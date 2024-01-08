import axios from "axios";

const getLoyaltyCards = () => {
  const apiUrl = `https://perkify-api.onrender.com/api/loyalty_cards`;

  return axios.get(apiUrl).then((res) => {
   
    return res.data.loyalty_cards;
  });
};

export default getLoyaltyCards;
