import axios from "axios";

const getSortByDateLoyaltyCards = (userId) => {
  const apiUrl = `https://perkify-api.onrender.com/api/loyalty_cards?user_id=${userId}&sort_by=date&order=asc`;

  return axios.get(apiUrl).then((res) => {
    return res.data.loyalty_cards;
  });
};

export default getSortByDateLoyaltyCards;
