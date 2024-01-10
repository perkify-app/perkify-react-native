import axios from "axios";

const createLoyaltyCard = (userId, programId) => {
	const apiUrl = `https://perkify-api.onrender.com/api/users/${userId}/loyalty_cards`;

	return axios.post(apiUrl, { loyalty_program_id: programId }).then((res) => {
		return res.data;
	});
};

export default createLoyaltyCard;
