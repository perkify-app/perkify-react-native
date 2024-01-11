import axios from "axios";

const getSortByCompletionLoyaltyCards = (userId) => {
	const apiUrl = `https://perkify-api.onrender.com/api/loyalty_cards?user_id=${userId}&sort_by=points&order=asc`;

	return axios.get(apiUrl).then((res) => {
		return res.data.loyalty_cards;
	});
};

export default getSortByCompletionLoyaltyCards;
