import axios from "axios";

export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		Authorization:
			"Bearer 1iEy_krHTfYt_esb9QxCi6tu0pEb878pfskrSCfS4xzgEPxxLjVP2GapuS2SUgWE3Fazbv-MTHUNxnyPJ8fTVFjCU5MfABTenGizX3G1ZtK1bBd-NZN9EgwUThHfXnYx",
	},
});
