import axios from "axios";

const redeemPointsOnServer = async (userId, loyaltyCardId) => {
  try {
    const response = await axios.patch(
      `https://perkify-api.onrender.com/api/redeem/${userId}/${loyaltyCardId}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default redeemPointsOnServer;
