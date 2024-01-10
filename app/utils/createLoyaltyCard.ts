import axios from "axios";

const createLoyaltyCard = (userId, programId) => {
	const apiUrl = `https://perkify-api.onrender.com/api/users/${userId}/loyalty_cards/${programId}`;

	return axios.post(apiUrl).then((res) => {
		return res.data;
	});
};

export default createLoyaltyCard;
