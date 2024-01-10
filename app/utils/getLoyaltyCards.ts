import axios from "axios";

const getLoyaltyCards = (query: string = "") => {
	const apiUrl = `https://perkify-api.onrender.com/api/loyalty_cards${query}`;

	return axios.get(apiUrl).then((res) => {
		return res.data.loyalty_cards;
	});
};

export default getLoyaltyCards;
