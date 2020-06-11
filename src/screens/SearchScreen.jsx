import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import ResultsList from "../components/ResultsList";

export default function SearchScreen() {
	const [term, setTerm] = useState("");
	const [searchApi, restaurants, errorMessage] = useRestaurants();

	const filterRestaurantsByPrice = price => {
		return restaurants.filter(restaurant => {
			return restaurant.price === price;
		});
	};

	return (
		<>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={() => searchApi(term)}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}

			<ScrollView>
				<ResultsList
					restaurants={filterRestaurantsByPrice("$")}
					title="Cheap and Easy ($)"
				/>
				<ResultsList
					restaurants={filterRestaurantsByPrice("$$")}
					title="Dinner with the Outlaws ($$)"
				/>
				<ResultsList
					restaurants={filterRestaurantsByPrice("$$$")}
					title="Date Night ($$$)"
				/>
				<ResultsList
					restaurants={filterRestaurantsByPrice("$$$$")}
					title="Maserati Parking Only ($$$$)"
				/>
			</ScrollView>
		</>
	);
}

const styles = StyleSheet.create({
	resultCount: {
		alignSelf: "center",
	},
});
