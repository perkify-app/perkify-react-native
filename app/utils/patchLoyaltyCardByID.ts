import axios from "axios";

const patchLoyaltyCardByID = (loyaltyCardId, loyaltyCard) => {
  const apiUrl = `https://perkify-api.onrender.com/api/loyalty_cards/${loyaltyCardId}`;

  return axios.patch(apiUrl, loyaltyCard).then((res) => {
    return res.data.loyalty_card;
  });
};

export default patchLoyaltyCardByID;