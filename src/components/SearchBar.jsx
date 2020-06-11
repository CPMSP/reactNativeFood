import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function SearchBar({ term, onTermChange, onTermSubmit }) {
	return (
		<View style={styles.backgroundStyle}>
			<FontAwesome style={styles.iconStyle} name="search" />
			<TextInput
				vautoCapitalize="none"
				autoCorrect={false}
				style={styles.inputStyle}
				placeholder="Search your Craving"
				value={term}
				onChangeText={onTermChange}
				onEndEditing={onTermSubmit}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	backgroundStyle: {
		backgroundColor: "#F0EEEE",
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: "row",
		marginTop: 15,
		marginBottom: 10,
	},
	inputStyle: {
		flex: 1,
		fontSize: 18,
	},
	iconStyle: {
		fontSize: 40,
		alignSelf: "center",
		marginHorizontal: 10,
	},
});
