import axios from "axios";

const getLoyaltyProgramsByMerchant = (merchantId) => {
	const apiUrl = `https://perkify-api.onrender.com/api/loyalty_programs/${merchantId}`;

	return axios.get(apiUrl).then((res) => {
		return res.data.loyalty_programs;
	});
};

export default getLoyaltyProgramsByMerchant;
