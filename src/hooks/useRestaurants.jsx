import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
	const [restaurants, setRestaurants] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	const searchApi = async searchTerm => {
		console.log("API Call");
		try {
			const response = await yelp.get("/search", {
				params: {
					limit: 50,
					term: searchTerm,
					location: "55364",
				},
			});
			setRestaurants(response.data.businesses);
		} catch (e) {
			setErrorMessage("Something went wrong");
		}
	};

	useEffect(() => {
		searchApi("shwarma");
	}, []);

	return [searchApi, restaurants, errorMessage];
};
