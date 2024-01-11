import axios from "axios";

const getSortByDateLoyaltyCardsAsc = (userId) => {
	const apiUrl = `https://perkify-api.onrender.com/api/loyalty_cards?user_id=${userId}&sort_by=date&order=desc`;

	return axios.get(apiUrl).then((res) => {
		return res.data.loyalty_cards;
	});
};

export default getSortByDateLoyaltyCardsAsc;
