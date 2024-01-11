import axios from "axios";

const getSortByCompletionLoyaltyCardsAsc = (userId) => {
  const apiUrl = `https://perkify-api.onrender.com/api/loyalty_cards?user_id=${userId}&sort_by=points&order=desc`;

  return axios.get(apiUrl).then((res) => {
    return res.data.loyalty_cards;
  });
};

export default getSortByCompletionLoyaltyCardsAsc;
