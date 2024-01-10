import axios from "axios";

const getSortByDateLoyaltyCards = () => {
  const apiUrl = `https://perkify-api.onrender.com/api/loyalty_cards?user_id=U2&sort_by=date&order=asc`;

  return axios.get(apiUrl).then((res) => {
    return res.data.loyalty_cards;
  });
};

export default getSortByDateLoyaltyCards;
