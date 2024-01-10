import axios from "axios";

const getLoyaltyCardsByUser = (userId) => {
	const apiUrl = `https://perkify-api.onrender.com/api/loyalty_cards?user_id=${userId}`;

	return axios.get(apiUrl).then((res) => {
		return res.data.loyalty_cards;
	});
};

export default getLoyaltyCardsByUser;
