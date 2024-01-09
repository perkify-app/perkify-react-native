import axios from "axios";

const getLoyaltyCardById = (loyaltyCardId) => {
	const apiUrl = `https://perkify-api.onrender.com/api/loyalty_cards/${loyaltyCardId}`;

	return axios.get(apiUrl).then((res) => {
		return res.data;
	});
};

export default getLoyaltyCardById;
