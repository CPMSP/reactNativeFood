import React from "react";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
} from "react-native";
import ResultsDetail from "./ResultsDetail";
import { withNavigation } from "react-navigation";

function ResultsList({ title, restaurants, navigation }) {
	if (!restaurants.length) {
		return null;
	}

	return (
		<View>
			<Text style={styles.titleStyle}>{title}</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={restaurants}
				keyExtractor={restaurants => restaurants.id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("Show", { id: item.id })
							}>
							<ResultsDetail result={item} />
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	titleStyle: {
		fontSize: 18,
		fontWeight: "bold",
		marginTop: 20,
		marginBottom: 10,
		marginLeft: 15,
	},
});

export default withNavigation(ResultsList);
