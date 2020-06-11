import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

export default function RestaurantShowScreen({ navigation }) {
	const [result, setResult] = useState(null);
	const id = navigation.getParam("id");

	const getRestaurant = async id => {
		const response = await yelp.get(`/${id}`);
		setResult(response.data);
	};

	useEffect(() => {
		getRestaurant(id);
	}, []);

	if (!result) {
		return null;
	}

	return (
		<View>
			<Text style={styles.name}>{result.name}</Text>
			<FlatList
				data={result.photos}
				keyExtractor={photo => photo}
				renderItem={({ item }) => {
					return (
						<Image style={styles.image} source={{ uri: item }} />
					);
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	name: {
		alignSelf: "center",
		fontSize: 20,
		marginTop: 20,
	},
	image: {
		height: 200,
		width: 300,
		marginTop: 20,
		alignSelf: "center",
	},
});
